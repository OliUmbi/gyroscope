package ch.oliumbi.gyroscope.broker.task;

import ch.oliumbi.gyroscope.broker.discussion.DiscussionMapper;
import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentCheckResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentResponse;
import ch.oliumbi.gyroscope.broker.profile.ProfileMapper;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.task.responses.TaskResponse;
import ch.oliumbi.gyroscope.core.incident.IncidentService;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentDTO;
import ch.oliumbi.gyroscope.core.task.TaskService;
import ch.oliumbi.gyroscope.core.task.dtos.TaskDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class TaskMapper {

    private final TaskService taskService;
    private final ProfileMapper profileMapper;
    private final DiscussionMapper discussionMapper;

    public TaskMapper(TaskService taskService, ProfileMapper profileMapper, DiscussionMapper discussionMapper) {
        this.taskService = taskService;
        this.profileMapper = profileMapper;
        this.discussionMapper = discussionMapper;
    }

    public TaskResponse map(TaskDTO taskDTO) {
        TaskResponse taskResponse = new TaskResponse();
        taskResponse.setId(taskDTO.getId());
        taskResponse.setTitle(taskDTO.getTitle());
        taskResponse.setStatus(taskDTO.getTaskStatus());
        taskResponse.setPriority(taskDTO.getTaskPriority());
        taskResponse.setCreated(taskDTO.getCreated());

        return taskResponse;
    }
}
