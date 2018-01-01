package uk.syntel.hackathon.clas.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uk.syntel.hackathon.clas.app.beans.Customer;
import uk.syntel.hackathon.clas.app.repository.CustomerRepository;

@Service
public class ClassService {

	@Autowired
	private CustomerRepository customerRepository;

	public Customer createCustomer(Customer customer) {
		Customer createdCustomer = customerRepository.save(customer);
		System.out.println(createdCustomer);
		return createdCustomer;
	}
	
}
