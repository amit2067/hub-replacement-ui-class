package uk.syntel.hackathon.clas.app;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.listener.ErrorHandler;
import org.springframework.kafka.support.converter.StringJsonMessageConverter;
import org.springframework.retry.RecoveryCallback;
import org.springframework.retry.RetryContext;
import org.springframework.retry.backoff.ExponentialBackOffPolicy;
import org.springframework.retry.backoff.FixedBackOffPolicy;
import org.springframework.retry.policy.SimpleRetryPolicy;
import org.springframework.retry.support.RetryTemplate;
import org.springframework.util.ObjectUtils;
import org.springframework.web.client.RestTemplate;

import uk.syntel.hackathon.clas.app.beans.ConsumerFailure;
import uk.syntel.hackathon.clas.app.beans.Customer;
import uk.syntel.hackathon.clas.app.util.ClassConstants;

@Configuration
@EnableKafka
public class ClassCustConsumerConfig {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Value(value = "${kafka.bootstrapAddress}") 
	private String bootstrapAddress;
	
	@Value(value = "${kafka.groupid}") 
	private String groupId;
	
	@Value(value = "${backoff.policy.strategy}") 
	private String backoffPolicy;
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Bean
    public ConsumerFactory<String, Customer> consumerFactory() {
        Map<String, Object> props = new HashMap<String, Object>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        return new DefaultKafkaConsumerFactory<String, Customer>(props);
    }
 
	/** SetUp Retry **/
	/**
	 * Error handler to work with
	 * @return
	 */
	@Bean
	public ErrorHandler errorHandler() {
		return new ErrorHandler() {

			@Override
			public void handle(Exception thrownException, ConsumerRecord<?, ?> record) {
				logger.error("Error while processing: " + ObjectUtils.nullSafeToString(record), thrownException);
			}
			
		};
	}
	
	@Bean
    public RetryTemplate retryTemplate() {
        RetryTemplate retryTemplate = new RetryTemplate();
         
        FixedBackOffPolicy fixedBackOffPolicy = new FixedBackOffPolicy();
        fixedBackOffPolicy.setBackOffPeriod(5000l);

        ExponentialBackOffPolicy ebPolicy = new ExponentialBackOffPolicy();
        ebPolicy.setInitialInterval(5000l);
        ebPolicy.setMultiplier(2);

        if ("EB".equals(backoffPolicy)) {
        	retryTemplate.setBackOffPolicy(ebPolicy);
        } else if ("FB".equals(backoffPolicy)) {
        	retryTemplate.setBackOffPolicy(fixedBackOffPolicy);
        }
 
        SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();
        retryPolicy.setMaxAttempts(4);
        retryTemplate.setRetryPolicy(retryPolicy);
        
        return retryTemplate;
    }
	
		
	/*   */
	
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Customer> 
      kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, Customer> factory
          	= new ConcurrentKafkaListenerContainerFactory<String, Customer>();
        factory.setConsumerFactory(consumerFactory());
        
        /** Setup Error handling and retry **/
        factory.getContainerProperties().setErrorHandler(errorHandler()); //Set Error Handler
        factory.setRetryTemplate(retryTemplate()); //Set retry policy
        factory.setRecoveryCallback(new RecoveryCallback<ConsumerRecord<String, String>>() {

			@SuppressWarnings("unchecked")
			@Override
			public ConsumerRecord<String, String> recover(RetryContext arg0) throws Exception {
				Object consumerRecordObject = arg0.getAttribute("record");
				if (consumerRecordObject instanceof ConsumerRecord) {
					ConsumerRecord<String, String> recordMap = (ConsumerRecord<String, String>) consumerRecordObject;
					ConsumerFailure consumerFailure = new ConsumerFailure("Customer", recordMap.topic(), groupId, recordMap.offset(), recordMap.value());
					logger.error("All retries are failed while consuming customer at topic: {}, offset: {}, value: {}", recordMap.offset(), recordMap.topic(), recordMap.value());
					String result = restTemplate.postForObject(ClassConstants.ELASTIC_PUBLISH_URL, consumerFailure, String.class);
					logger.info("CLASS Kafka Consumer - Customer failures Publish to Elastic Search :"+result);
				}
				return null;
			}
		});
        
        factory.setMessageConverter(new StringJsonMessageConverter());
        return factory;
    }
}
