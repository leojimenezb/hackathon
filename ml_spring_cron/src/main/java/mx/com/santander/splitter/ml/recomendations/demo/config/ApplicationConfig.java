package mx.com.santander.splitter.ml.recomendations.demo.config;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import com.mongodb.MongoClientSettings.Builder;
import com.mongodb.MongoCredential;
import com.mongodb.ServerAddress;

@Configuration
public class ApplicationConfig extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName() {
        return "hackathon";
    }

    @Override
    protected void configureClientSettings(Builder builder) {
        builder.credential(
            MongoCredential.createCredential(
                "admin",
                "admin",
                "admin123".toCharArray()
            )
        ).applyToClusterSettings(settings ->
            settings.hosts(List.of(new ServerAddress("localhost", 27017)))
        );
    }
}
