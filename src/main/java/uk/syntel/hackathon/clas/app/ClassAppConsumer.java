package uk.syntel.hackathon.clas.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import uk.syntel.hackathon.clas.app.beans.Application;
import uk.syntel.hackathon.clas.app.service.ClassService;

@Component
public class ClassAppConsumer {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ClassService service;


	@KafkaListener(topics = "APPLICATION", group = "CLASS")
	public void listen(Application application) {
		logger.info("CLASS - Application Received via Kafka: " + application);
		service.propogateApplication(application);
	}
	
}
