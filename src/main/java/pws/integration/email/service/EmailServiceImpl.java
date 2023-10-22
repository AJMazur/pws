package pws.integration.email.service;

import jakarta.mail.*;
import jakarta.mail.internet.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pws.common.data.EmailProperties;
import pws.integration.email.dto.EmailDto;

@Transactional
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class EmailServiceImpl implements EmailService {

    private final EmailProperties properties;

    @Override
    public void sendEmail(EmailDto emailDto) throws Exception {
        Session session = Session.getInstance(properties.getProperties(), createEmailAuthenticator(properties));
        Message message = new MimeMessage(session);
        try {
            message.setFrom(new InternetAddress(emailDto.getEmailAddress()));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress("a.j.a.mazur65@gmail.com"));
            message.setSubject(emailDto.getEmailTitle());

            MimeBodyPart mimeBodyPart = new MimeBodyPart();
            mimeBodyPart.setContent(emailDto.getEmailBody(), "text/html; charset=utf-8");

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(mimeBodyPart);

            message.setContent(multipart);
        } catch (Exception e) {
            throw new Exception("Unable to write message", e);
        }

        try {
            Transport.send(message);
        } catch (Exception e) {
            throw new Exception("Unable to send message", e);
        }
    }

    private Authenticator createEmailAuthenticator(EmailProperties properties) {
        return new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(properties.getUser(), properties.getPass());
            }
        };
    }
}
