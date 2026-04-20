package mx.com.santander.splitter.ml.recomendations.demo.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import mx.com.santander.splitter.ml.recomendations.demo.dto.Transaction;

import java.util.List;

public interface TransactionRepository extends MongoRepository<Transaction, String> {

    List<Transaction> findByCustomerId(String customerId);
}