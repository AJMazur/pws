package pws.integration.email.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pws.integration.email.dto.EmailDto;

import java.util.Properties;

@Transactional
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class EmailServiceImpl implements EmailService {

    private final Properties properties;

    @Override
    public boolean sendEmail(EmailDto emailDto) {
        return false;
    }
}
