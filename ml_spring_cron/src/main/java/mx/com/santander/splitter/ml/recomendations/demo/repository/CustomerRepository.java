package mx.com.santander.splitter.ml.recomendations.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import mx.com.santander.splitter.ml.recomendations.demo.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {
}
