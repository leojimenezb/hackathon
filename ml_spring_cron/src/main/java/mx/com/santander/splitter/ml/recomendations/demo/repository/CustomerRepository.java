package mx.com.santander.splitter.ml.recomendations.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import mx.com.santander.splitter.ml.recomendations.demo.model.Customer;
@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
}
