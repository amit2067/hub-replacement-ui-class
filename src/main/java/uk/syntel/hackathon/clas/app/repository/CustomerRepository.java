package uk.syntel.hackathon.clas.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import uk.syntel.hackathon.clas.app.beans.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
