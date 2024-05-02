package ch.oliumbi.gyroscope.endpoints.task;

import ch.oliumbi.gyroscope.endpoints.Session;
import ch.oliumbi.gyroscope.endpoints.discussion.DiscussionMapper;
import ch.oliumbi.gyroscope.endpoints.discussion.responses.DiscussionCommentResponse;
import ch.oliumbi.gyroscope.endpoints.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.endpoints.profile.ProfileMapper;
import ch.oliumbi.gyroscope.endpoints.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.endpoints.responses.IdResponse;
import ch.oliumbi.gyroscope.endpoints.responses.MessageResponse;
import ch.oliumbi.gyroscope.endpoints.task.requests.TaskRequest;
import ch.oliumbi.gyroscope.endpoints.task.responses.TaskResponse;
import ch.oliumbi.gyroscope.core.discussion.DiscussionService;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.task.TaskService;
import ch.oliumbi.gyroscope.core.task.dtos.TaskDTO;
import ch.oliumbi.gyroscope.security.SecurityAuthority;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Tag(name = "Task")
@RequestMapping("/task")
@RestController
public class TaskController {

    private final TaskService taskService;
    private final TaskMapper taskMapper;
    private final ProfileService profileService;
    private final DiscussionService discussionService;
    private final ProfileMapper profileMapper;
    private final DiscussionMapper discussionMapper;

    public TaskController(TaskService taskService, TaskMapper taskMapper, ProfileService profileService, DiscussionService discussionService, ProfileMapper profileMapper, DiscussionMapper discussionMapper) {
        this.taskService = taskService;
        this.taskMapper = taskMapper;
        this.profileService = profileService;
        this.discussionService = discussionService;
        this.profileMapper = profileMapper;
        this.discussionMapper = discussionMapper;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping()
    public List<TaskResponse> load() {
        List<TaskDTO> taskDTOs = taskService.load();

        List<TaskResponse> taskResponses = new ArrayList<>();
        for (TaskDTO taskDTO : taskDTOs) {
            TaskResponse taskResponse = taskMapper.map(taskDTO);

            ProfileDTO assigneeProfileDTO = profileService.load(taskDTO.getAssigneeProfileId());
            ProfileResponse assigneeProfileResponse = profileMapper.map(assigneeProfileDTO);
            taskResponse.setAssignee(assigneeProfileResponse);

            taskResponses.add(taskResponse);
        }

        return taskResponses;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping("/{id}")
    public TaskResponse load(@PathVariable("id") UUID id) {
        TaskDTO taskDTO = taskService.load(id);
        TaskResponse taskResponse = taskMapper.map(taskDTO);

        ProfileDTO creatorProfileDTO = profileService.load(taskDTO.getCreatorProfileId());
        ProfileResponse creatorProfileResponse = profileMapper.map(creatorProfileDTO);
        taskResponse.setCreator(creatorProfileResponse);

        if (taskDTO.getAssigneeProfileId() != null) {
            ProfileDTO assigneeProfileDTO = profileService.load(taskDTO.getAssigneeProfileId());
            ProfileResponse assigneeProfileResponse = profileMapper.map(assigneeProfileDTO);
            taskResponse.setAssignee(assigneeProfileResponse);
        }

        return taskResponse;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @PostMapping()
    public IdResponse create(@RequestBody TaskRequest taskRequest) {
        UUID id = taskService.create(Session.currentId(), taskRequest.getAssignee(), discussionService.create(), taskRequest.getTitle(), taskRequest.getStatus(), taskRequest.getPriority());

        return new IdResponse(id);
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @PutMapping("/{id}")
    public MessageResponse update(@PathVariable("id") UUID id, @RequestBody TaskRequest taskRequest) {
        taskService.update(id, taskRequest.getAssignee(), taskRequest.getTitle(), taskRequest.getStatus(), taskRequest.getPriority());

        return new MessageResponse("Successfully updated task");
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable("id") UUID id) {
        taskService.delete(id);

        return new MessageResponse("Successfully deleted task");
    }
}
