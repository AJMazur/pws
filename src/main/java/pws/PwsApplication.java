package pws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import pws.common.repository.PortalTextRepository;

@SpringBootApplication
@EnableMongoRepositories
public class PwsApplication {

	@Autowired
	PortalTextRepository portalTextRepository;

	public static void main(String[] args) {
		SpringApplication.run(PwsApplication.class, args);
	}

}
