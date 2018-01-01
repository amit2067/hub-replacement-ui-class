package uk.syntel.hackathon.clas.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import uk.syntel.hackathon.clas.app.beans.Customer;
import uk.syntel.hackathon.clas.app.service.ClassService;

@RestController
public class ClassController {

	@Autowired
	ClassService service;

	@PostMapping("/createCustomer")
	public Customer createCustomer(@RequestBody Customer customer) {
		Customer createdCustomer = service.createCustomer(customer);
		return createdCustomer;
	}

}
