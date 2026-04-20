package mx.com.santander.splitter.ml.recomendations.demo.repository;


import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import mx.com.santander.splitter.ml.recomendations.demo.model.Transaction;

import java.util.List;
@Repository
public interface TransactionRepository extends MongoRepository<Transaction, ObjectId> {

    List<Transaction> findByCustomerId(String customerId);
}