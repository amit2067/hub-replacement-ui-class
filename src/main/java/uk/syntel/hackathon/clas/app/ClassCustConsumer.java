package uk.syntel.hackathon.clas.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import uk.syntel.hackathon.clas.app.beans.Customer;
import uk.syntel.hackathon.clas.app.service.ClassService;

@Component
public class ClassCustConsumer {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ClassService service;


	@KafkaListener(topics = "CUSTOMER", group = "CLASS")
	public void listen(Customer customer) {
		logger.info("Customer Received via Kafka: " + customer);
		service.propogateCustomer(customer);
	}
	
}
