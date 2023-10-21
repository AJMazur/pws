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
        if (emailService.sendEmail(email)) {
            return ResponseEntity.ok("ok");
        }
        return ResponseEntity.badRequest().body("unable to send an email");
    }
}
