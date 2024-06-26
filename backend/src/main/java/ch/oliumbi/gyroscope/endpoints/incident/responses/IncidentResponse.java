package ch.oliumbi.gyroscope.endpoints.incident.responses;

import ch.oliumbi.gyroscope.endpoints.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.endpoints.profile.responses.ProfileResponse;
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
public class IncidentResponse {
    private UUID id;
    private String title;
    private String system;
    private LocalDateTime time;
    private IncidentStatus status;
    private IncidentSeverity severity;
    private IncidentType type;
    private List<IncidentCheckResponse> checks;
    private ProfileResponse creator;
    private ProfileResponse assignee;
    private UUID discussionId;
    private LocalDateTime created;
    private LocalDateTime updated;
}
