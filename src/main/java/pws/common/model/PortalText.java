package pws.common.model;

import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("portaltext")
public class PortalText {

    @Id
    private String id;

    private String key;

    private String body;

    public PortalText(String id, String key, String body) {
        super();
        this.id = id;
        this.key = key;
        this.body = body;
    }

}
