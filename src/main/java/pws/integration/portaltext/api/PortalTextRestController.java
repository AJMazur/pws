package pws.integration.portaltext.api;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pws.common.repository.PortalTextRepository;

@RestController
@RequestMapping("/portaltext")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PortalTextRestController {


    private final PortalTextRepository portalTextRepository;

    @GetMapping("/getPortalText/{key}")
    public ResponseEntity<String> getPortalText(@PathVariable("key") String portalTextKey) {
        try {
            return ResponseEntity.ok(portalTextRepository.findPortalTextByKey(portalTextKey).getBody());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    String.format(
                            "Unable to get a portaltext: %1$s with exception: %2$s",
                            portalTextKey,
                            e.getMessage()
                    ));
        }
    }
}
