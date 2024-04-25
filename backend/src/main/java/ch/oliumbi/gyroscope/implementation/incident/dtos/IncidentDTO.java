package ch.oliumbi.gyroscope.implementation.incident.dtos;

import ch.oliumbi.gyroscope.dtos.MetaDTO;
import ch.oliumbi.gyroscope.implementation.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentSeverity;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentStatus;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentType;
import ch.oliumbi.gyroscope.implementation.profile.dtos.ProfileDTO;
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
public class IncidentDTO extends MetaDTO {
    private UUID id;
    private UUID creatorProfileId;
    private UUID assigneeProfileId;
    private UUID discussionId;
    private String title;
    private String system;
    private LocalDateTime time;
    private IncidentStatus incidentStatus;
    private IncidentSeverity incidentSeverity;
    private IncidentType incidentType;

    private List<IncidentCheckDTO> incidentCheckDTOs;
    private ProfileDTO creatorProfileDTO;
    private ProfileDTO assigneeProfileDTO;
    private DiscussionDTO discussionDTO;
}
