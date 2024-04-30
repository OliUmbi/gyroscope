package ch.oliumbi.gyroscope.broker.incident;

import ch.oliumbi.gyroscope.broker.discussion.DiscussionMapper;
import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionCommentResponse;
import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentCheckResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentResponse;
import ch.oliumbi.gyroscope.broker.profile.ProfileMapper;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.requests.IdRequest;
import ch.oliumbi.gyroscope.core.discussion.DiscussionService;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.core.incident.IncidentService;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentDTO;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

@Controller
public class IncidentController {

    private final IncidentService incidentService;
    private final IncidentMapper incidentMapper;
    private final ProfileService profileService;
    private final ProfileMapper profileMapper;
    private final DiscussionService discussionService;
    private final DiscussionMapper discussionMapper;

    public IncidentController(IncidentService incidentService, IncidentMapper incidentMapper, ProfileService profileService, ProfileMapper profileMapper, ProfileMapper profileMapper1, DiscussionService discussionService, DiscussionMapper discussionMapper) {
        this.incidentService = incidentService;
        this.incidentMapper = incidentMapper;
        this.profileService = profileService;
        this.profileMapper = profileMapper1;
        this.discussionService = discussionService;
        this.discussionMapper = discussionMapper;
    }

    @MessageMapping("/incident")
    @SendTo("/incident")
    public List<IncidentResponse> load() {
        List<IncidentDTO> incidentDTOs = incidentService.load();

        List<IncidentResponse> incidentResponses = new ArrayList<>();
        for (IncidentDTO incidentDTO : incidentDTOs) {
            incidentResponses.add(incidentMapper.map(incidentDTO));
        }

        return incidentResponses;
    }

    @MessageMapping("/incident/id")
    @SendTo("/incident/id")
    public IncidentResponse load(IdRequest idRequest) {
        IncidentDTO incidentDTO = incidentService.load(idRequest.getId());

        IncidentResponse incidentResponse = incidentMapper.map(incidentDTO);

        List<IncidentCheckDTO> incidentCheckDTOs = incidentService.loadChecks(incidentDTO.getId());
        for (IncidentCheckDTO incidentCheckDTO : incidentCheckDTOs) {
            IncidentCheckResponse incidentCheckResponse = incidentMapper.mapCheck(incidentCheckDTO);
            incidentResponse.getChecks().add(incidentCheckResponse);
        }

        ProfileDTO creatorProfileDTO = profileService.load(incidentDTO.getCreatorProfileId());
        ProfileResponse creatorProfileResponse = profileMapper.map(creatorProfileDTO);
        incidentResponse.setCreator(creatorProfileResponse);

        ProfileDTO assigneeProfileDTO = profileService.load(incidentDTO.getAssigneeProfileId());
        ProfileResponse assigneeProfileResponse = profileMapper.map(assigneeProfileDTO);
        incidentResponse.setAssignee(assigneeProfileResponse);

        DiscussionDTO discussionDTO = discussionService.load(incidentDTO.getDiscussionId());
        DiscussionResponse discussionResponse = discussionMapper.map(discussionDTO);

        List<DiscussionCommentDTO> discussionCommentDTOs = discussionService.loadComment(incidentDTO.getDiscussionId());
        for (DiscussionCommentDTO discussionCommentDTO : discussionCommentDTOs) {
            DiscussionCommentResponse discussionCommentResponse = discussionMapper.mapComment(discussionCommentDTO);

            ProfileDTO profileDTO = profileService.load(discussionCommentDTO.getProfileId());
            discussionCommentResponse.setProfile(profileMapper.map(profileDTO));

            discussionResponse.getComments().add(discussionCommentResponse);
        }

        incidentResponse.setDiscussion(discussionResponse);

        return incidentResponse;
    }
}
