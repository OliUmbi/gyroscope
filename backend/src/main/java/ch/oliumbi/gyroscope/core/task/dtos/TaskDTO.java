package ch.oliumbi.gyroscope.core.task.dtos;

import ch.oliumbi.gyroscope.core.dtos.MetaDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.task.enums.TaskPriority;
import ch.oliumbi.gyroscope.core.task.enums.TaskStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
