package ch.oliumbi.gyroscope.endpoints.task;

import ch.oliumbi.gyroscope.endpoints.discussion.DiscussionMapper;
import ch.oliumbi.gyroscope.endpoints.profile.ProfileMapper;
import ch.oliumbi.gyroscope.endpoints.task.responses.TaskResponse;
import ch.oliumbi.gyroscope.core.task.TaskService;
import ch.oliumbi.gyroscope.core.task.dtos.TaskDTO;
import org.springframework.stereotype.Service;

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
