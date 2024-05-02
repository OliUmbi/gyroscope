package ch.oliumbi.gyroscope.endpoints.incident.requests;

import ch.oliumbi.gyroscope.core.incident.enums.IncidentSeverity;
import ch.oliumbi.gyroscope.core.incident.enums.IncidentStatus;
import ch.oliumbi.gyroscope.core.incident.enums.IncidentType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class IncidentRequest {
    private UUID assignee;
    private String title;
    private String system;
    private LocalDateTime time;
    private IncidentStatus status;
    private IncidentSeverity severity;
    private IncidentType type;
    private List<IncidentCheckRequest> checks;
}
