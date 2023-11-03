package pws.integration.portaltext.api;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pws.common.model.PortalText;
import pws.common.repository.PortalTextRepository;

import java.util.List;

@RestController
@RequestMapping("/portaltext")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PortalTextRestController {


    private final PortalTextRepository portalTextRepository;

    @GetMapping("/getPortalTexts")
    public ResponseEntity<List<PortalText>> getPortalText() throws Exception {
        try {
            return ResponseEntity.ok(portalTextRepository.findAll());
        } catch (Exception e) {
            throw new Exception(
                    String.format(
                            "Unable to get a portaltext with exception: %1$s",
                            e.getMessage()
                    ));
        }
    }
}
