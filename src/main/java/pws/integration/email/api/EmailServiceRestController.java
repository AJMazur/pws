package pws.integration.email.api;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pws.integration.email.service.EmailService;
import pws.integration.email.dto.EmailDto;

@RestController
@RequestMapping("/email")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class EmailServiceRestController {

    private final EmailService emailService;

    @PostMapping("/sendEmail")
    public ResponseEntity<String> postEmail(EmailDto email) {
        try {
            emailService.sendEmail(email);
            return ResponseEntity.ok("ok");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    String.format("Unable to send an email with exception: %s", e.getMessage()));
        }
    }
}
