package pws.integration.email.service.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import pws.integration.email.service.EmailService;
import pws.integration.email.service.EmailServiceImpl;

import java.util.Properties;

@Configuration
@PropertySource("classpath:/properties/email.properties")
public class EmailServiceConfig {

    @Bean
    public EmailService emailService(@Qualifier("EmailServiceProperties") Properties emailServiceProperties) {
        return new EmailServiceImpl(emailServiceProperties);
    }

    @Bean
    @Primary
    public Properties EmailServiceProperties(@Autowired Environment environment) throws Exception {
        Properties properties = new Properties();

        try {
            properties.setProperty("mail.smtp.auth", environment.getProperty("mail.smtp.auth"));
            properties.setProperty("mail.smtp.starttls.enable", environment.getProperty("mail.smtp.starttls.enable"));
            properties.setProperty("mail.smtp.host", environment.getProperty("mail.smtp.host"));
            properties.setProperty("mail.smtp.port", environment.getProperty("mail.smtp.port"));
            properties.setProperty("mail.smtp.ssl.trust", environment.getProperty("mail.smtp.ssl.trust"));
        } catch (Exception e) {
            throw new Exception("Unable to read properties for email service", e);
        }

        return properties;
    }
}
