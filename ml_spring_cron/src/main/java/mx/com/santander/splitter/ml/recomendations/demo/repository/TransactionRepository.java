package mx.com.santander.splitter.ml.recomendations.demo.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import mx.com.santander.splitter.ml.recomendations.demo.dto.Transaction;

import java.util.List;
@Repository
public interface TransactionRepository extends MongoRepository<Transaction, String> {

    List<Transaction> findByCustomerId(String customerId);
}