package uk.syntel.hackathon.clas.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import uk.syntel.hackathon.clas.app.beans.Application;
import uk.syntel.hackathon.clas.app.beans.Customer;
import uk.syntel.hackathon.clas.app.service.ClassService;

@Api(value="CLASS Service", description="CLASS Operations to deal with Customers and Applications")
@RestController
public class ClassController {

	@Autowired
	private ClassService service;

	@ApiOperation(value = "Create a Customer in CLASS",response = Customer.class)
	@PostMapping("/createCustomer")
	public Customer createCustomer(@RequestBody Customer customer) {
		Customer createdCustomer = service.createCustomer(customer);
		return createdCustomer;
	}
	
	@ApiOperation(value = "Create an Application in CLASS",response = Application.class)
	@PostMapping("/createApplication")
	public Application createApplication(@RequestBody Application application) {
		Application createdApp = service.createApplication(application);
		return createdApp;
	}	

}
