package pws.integration.email.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailDto {

    @JsonProperty("emailAddress")
    private String emailAddress;

    @JsonProperty("emailTitle")
    private String emailTitle;

    @JsonProperty("emailBody")
    private String emailBody;
}
