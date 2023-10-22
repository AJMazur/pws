package pws.integration.email.service;

import pws.integration.email.dto.EmailDto;

public interface EmailService {

    void sendEmail(EmailDto emailDto) throws Exception;
}
