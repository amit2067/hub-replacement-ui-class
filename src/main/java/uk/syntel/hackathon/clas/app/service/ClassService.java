package uk.syntel.hackathon.clas.app.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import uk.syntel.hackathon.clas.app.beans.Application;
import uk.syntel.hackathon.clas.app.beans.Customer;
import uk.syntel.hackathon.clas.app.repository.ApplicationRepository;
import uk.syntel.hackathon.clas.app.repository.CustomerRepository;
import uk.syntel.hackathon.clas.app.util.ClassConstants;

@Service
public class ClassService {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private ApplicationRepository applicationRepository;
	
	@Autowired
	private RestTemplate restTemplate;

	public Customer createCustomer(Customer customer) {
		Customer createdCustomer = customerRepository.save(customer);
		logger.info("CLASS : Customer Created - "+createdCustomer);
		if (null != createdCustomer && null != createdCustomer.getId()) {
			String result = restTemplate.postForObject(ClassConstants.CUSTOMER_PUBLISH_URL, createdCustomer, String.class);
			logger.info("CLASS : Customer publish to Kafka status : "+result);
		}
		return createdCustomer;
	}
	
	public Application createApplication(Application application) {
		Application createdApp = applicationRepository.save(application);
		logger.info("CLASS : Application Created - "+createdApp);
		if (null != createdApp && null != createdApp.getId()) {
			String result = restTemplate.postForObject(ClassConstants.APPLICATION_PUBLISH_URL, createdApp, String.class);
			logger.info("CLASS : Application publish to Kafka status : "+result);
		}
		return createdApp;
	}

	public List<Customer> getCustomers() {
		return customerRepository.findAll();
	}
		
	public void propogateCustomer(Customer customer) {
		if (ClassConstants.CLASS.equalsIgnoreCase(customer.getCreatedBy())) {
			logger.info("CLASS : Customer created by self - not inserting");
			return;
		}
		Customer propogatedCustomer = customerRepository.save(customer);
		logger.info("CLASS : Customer propagated via Kafka - "+propogatedCustomer);
	}
	
	public void propogateApplication(Application application) {
		if (ClassConstants.CLASS.equalsIgnoreCase(application.getCreatedBy())) {
			logger.info("CLASS : Application created by self - not inserting");
			return;
		}
		Application propogatedApp = applicationRepository.save(application);
		logger.info("CLASS : Application propagated via Kafka - "+propogatedApp);
	}

	
	
}
