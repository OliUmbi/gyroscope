package ch.oliumbi.gyroscope.implementation.task.dtos;

import ch.oliumbi.gyroscope.dtos.MetaDTO;
import ch.oliumbi.gyroscope.implementation.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentSeverity;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentStatus;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentType;
import ch.oliumbi.gyroscope.implementation.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.implementation.task.enums.TaskPriority;
import ch.oliumbi.gyroscope.implementation.task.enums.TaskStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO extends MetaDTO {
    private UUID id;
    private UUID creatorProfileId;
    private UUID assigneeProfileId;
    private UUID discussionId;
    private String title;
    private TaskStatus taskStatus;
    private TaskPriority taskPriority;

    private ProfileDTO creatorProfileDTO;
    private ProfileDTO assigneeProfileDTO;
    private DiscussionDTO discussionDTO;
}
