package mx.com.santander.splitter.ml.recomendations.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

  /*
   * Use the standard Mongo driver API to create a com.mongodb.client.MongoClient instance.
   */
   public @Bean com.mongodb.client.MongoClient mongoClient() {
       return com.mongodb.client.MongoClients.create("mongodb://admin:admin123@localhost:27017/hackathon?authSource=admin");
   }
}
