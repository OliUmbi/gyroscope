package ch.oliumbi.gyroscope.endpoints.incident.requests;

import ch.oliumbi.gyroscope.core.dtos.MetaDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IncidentCheckRequest {
    private String value;
    private Boolean checked;
}
