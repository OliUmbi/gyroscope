package ch.oliumbi.gyroscope.core.incident.dtos;

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
public class IncidentCheckDTO extends MetaDTO {
    private UUID id;
    private UUID incidentId;
    private String value;
    private Boolean checked;
}
