package ch.oliumbi.gyroscope.broker.incident.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IncidentCheckResponse {
    private UUID id;
    private String value;
    private Boolean checked;
}
