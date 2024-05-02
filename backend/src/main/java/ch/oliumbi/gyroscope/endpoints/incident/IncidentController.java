package ch.oliumbi.gyroscope.endpoints.incident;

import ch.oliumbi.gyroscope.endpoints.Session;
import ch.oliumbi.gyroscope.endpoints.discussion.DiscussionMapper;
import ch.oliumbi.gyroscope.endpoints.discussion.responses.DiscussionCommentResponse;
import ch.oliumbi.gyroscope.endpoints.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.endpoints.incident.requests.IncidentCheckRequest;
import ch.oliumbi.gyroscope.endpoints.incident.requests.IncidentRequest;
import ch.oliumbi.gyroscope.endpoints.incident.responses.IncidentCheckResponse;
import ch.oliumbi.gyroscope.endpoints.incident.responses.IncidentResponse;
import ch.oliumbi.gyroscope.endpoints.profile.ProfileMapper;
import ch.oliumbi.gyroscope.endpoints.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.core.discussion.DiscussionService;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.core.incident.IncidentService;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentDTO;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.endpoints.responses.IdResponse;
import ch.oliumbi.gyroscope.endpoints.responses.MessageResponse;
import ch.oliumbi.gyroscope.security.SecurityAuthority;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Tag(name = "Incident")
@RequestMapping("/incident")
@RestController
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

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping()
    public List<IncidentResponse> load() {
        List<IncidentDTO> incidentDTOs = incidentService.load();

        List<IncidentResponse> incidentResponses = new ArrayList<>();
        for (IncidentDTO incidentDTO : incidentDTOs) {
            incidentResponses.add(incidentMapper.map(incidentDTO));
        }

        return incidentResponses;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping("/{id}")
    public IncidentResponse load(@PathVariable("id") UUID id) {
        IncidentDTO incidentDTO = incidentService.load(id);

        IncidentResponse incidentResponse = incidentMapper.map(incidentDTO);

        List<IncidentCheckDTO> incidentCheckDTOs = incidentService.loadChecks(incidentDTO.getId());
        for (IncidentCheckDTO incidentCheckDTO : incidentCheckDTOs) {
            IncidentCheckResponse incidentCheckResponse = incidentMapper.mapCheck(incidentCheckDTO);
            incidentResponse.getChecks().add(incidentCheckResponse);
        }

        ProfileDTO creatorProfileDTO = profileService.load(incidentDTO.getCreatorProfileId());
        ProfileResponse creatorProfileResponse = profileMapper.map(creatorProfileDTO);
        incidentResponse.setCreator(creatorProfileResponse);

        if (incidentDTO.getAssigneeProfileId() != null) {
            ProfileDTO assigneeProfileDTO = profileService.load(incidentDTO.getAssigneeProfileId());
            ProfileResponse assigneeProfileResponse = profileMapper.map(assigneeProfileDTO);
            incidentResponse.setAssignee(assigneeProfileResponse);
        }

        return incidentResponse;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @PostMapping()
    public IdResponse create(@RequestBody IncidentRequest incidentRequest) {
        UUID id = incidentService.create(Session.currentId(), incidentRequest.getAssignee(), discussionService.create(), incidentRequest.getTitle(), incidentRequest.getSystem(), incidentRequest.getTime(), incidentRequest.getStatus(), incidentRequest.getSeverity(), incidentRequest.getType());

        for (IncidentCheckRequest incidentRequestCheck : incidentRequest.getChecks()) {
            incidentService.createCheck(id, incidentRequestCheck.getValue(), incidentRequestCheck.getChecked());
        }

        return new IdResponse(id);
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @PutMapping("/{id}")
    public MessageResponse update(@PathVariable("id") UUID id, @RequestBody IncidentRequest incidentRequest) {
        incidentService.update(id, incidentRequest.getAssignee(), incidentRequest.getTitle(), incidentRequest.getSystem(), incidentRequest.getTime(), incidentRequest.getStatus(), incidentRequest.getSeverity(), incidentRequest.getType());

        incidentService.deleteCheck(id);

        for (IncidentCheckRequest incidentRequestCheck : incidentRequest.getChecks()) {
            incidentService.createCheck(id, incidentRequestCheck.getValue(), incidentRequestCheck.getChecked());
        }

        return new MessageResponse("Successfully updated incident");
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @PutMapping("/check/{id}")
    public MessageResponse updateCheck(@PathVariable("id") UUID id, @RequestBody IncidentCheckRequest incidentCheckRequest) {
        incidentService.updateCheck(id, incidentCheckRequest.getValue(), incidentCheckRequest.getChecked());

        return new MessageResponse("Successfully updated incident check");
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @DeleteMapping("/{id}")
    public MessageResponse delete(@PathVariable("id") UUID id) {
        incidentService.delete(id);

        return new MessageResponse("Successfully deleted incident");
    }
}
