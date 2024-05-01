package ch.oliumbi.gyroscope.endpoints.task.responses;

import ch.oliumbi.gyroscope.endpoints.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.endpoints.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.core.task.enums.TaskPriority;
import ch.oliumbi.gyroscope.core.task.enums.TaskStatus;
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
public class TaskResponse {
    private UUID id;
    private String title;
    private TaskStatus status;
    private TaskPriority priority;
    private ProfileResponse creator;
    private ProfileResponse assignee;
    private DiscussionResponse discussion;
    private LocalDateTime created;
}
