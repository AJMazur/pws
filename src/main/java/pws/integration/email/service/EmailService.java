package pws.integration.email.service;

import pws.integration.email.dto.EmailDto;

public interface EmailService {

    boolean sendEmail(EmailDto emailDto);
}
