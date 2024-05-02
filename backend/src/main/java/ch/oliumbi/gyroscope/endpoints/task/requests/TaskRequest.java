package ch.oliumbi.gyroscope.endpoints.task.requests;

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
public class TaskRequest {
    private UUID assignee;
    private String title;
    private TaskStatus status;
    private TaskPriority priority;
}
