package ch.oliumbi.gyroscope.broker.task;

import ch.oliumbi.gyroscope.broker.discussion.DiscussionMapper;
import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionCommentResponse;
import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentResponse;
import ch.oliumbi.gyroscope.broker.profile.ProfileMapper;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.requests.IdRequest;
import ch.oliumbi.gyroscope.broker.task.responses.TaskResponse;
import ch.oliumbi.gyroscope.core.discussion.DiscussionService;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.task.TaskService;
import ch.oliumbi.gyroscope.core.task.dtos.TaskDTO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

@Controller
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

    @MessageMapping("/task")
    @SendTo("/task")
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

    @MessageMapping("/task/id")
    @SendTo("/task/id")
    public TaskResponse load(IdRequest idRequest) {
        TaskDTO taskDTO = taskService.load(idRequest.getId());
        TaskResponse taskResponse = taskMapper.map(taskDTO);

        ProfileDTO creatorProfileDTO = profileService.load(taskDTO.getCreatorProfileId());
        ProfileResponse creatorProfileResponse = profileMapper.map(creatorProfileDTO);
        taskResponse.setCreator(creatorProfileResponse);

        ProfileDTO assigneeProfileDTO = profileService.load(taskDTO.getAssigneeProfileId());
        ProfileResponse assigneeProfileResponse = profileMapper.map(assigneeProfileDTO);
        taskResponse.setAssignee(assigneeProfileResponse);

        DiscussionDTO discussionDTO = discussionService.load(taskDTO.getDiscussionId());
        DiscussionResponse discussionResponse = discussionMapper.map(discussionDTO);

        List<DiscussionCommentDTO> discussionCommentDTOs = discussionService.loadComment(taskDTO.getDiscussionId());
        for (DiscussionCommentDTO discussionCommentDTO : discussionCommentDTOs) {
            DiscussionCommentResponse discussionCommentResponse = discussionMapper.mapComment(discussionCommentDTO);

            ProfileDTO profileDTO = profileService.load(discussionCommentDTO.getProfileId());
            discussionCommentResponse.setProfile(profileMapper.map(profileDTO));

            discussionResponse.getComments().add(discussionCommentResponse);
        }

        taskResponse.setDiscussion(discussionResponse);

        return taskResponse;
    }
}
