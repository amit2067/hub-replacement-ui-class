package uk.syntel.hackathon.clas.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import uk.syntel.hackathon.clas.app.beans.Application;

@Repository
public interface ApplicationRepository extends CrudRepository<Application, Long> {

	List<Application> findAll();
	
}
