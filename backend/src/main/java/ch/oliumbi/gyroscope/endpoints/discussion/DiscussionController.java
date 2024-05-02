package ch.oliumbi.gyroscope.endpoints.discussion;

import ch.oliumbi.gyroscope.core.discussion.DiscussionService;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.core.incident.IncidentService;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentDTO;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.endpoints.Session;
import ch.oliumbi.gyroscope.endpoints.discussion.requests.DiscussionCommentRequest;
import ch.oliumbi.gyroscope.endpoints.discussion.responses.DiscussionCommentResponse;
import ch.oliumbi.gyroscope.endpoints.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.endpoints.incident.IncidentMapper;
import ch.oliumbi.gyroscope.endpoints.incident.requests.IncidentCheckRequest;
import ch.oliumbi.gyroscope.endpoints.incident.requests.IncidentRequest;
import ch.oliumbi.gyroscope.endpoints.incident.responses.IncidentCheckResponse;
import ch.oliumbi.gyroscope.endpoints.incident.responses.IncidentResponse;
import ch.oliumbi.gyroscope.endpoints.profile.ProfileMapper;
import ch.oliumbi.gyroscope.endpoints.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.endpoints.responses.IdResponse;
import ch.oliumbi.gyroscope.security.SecurityAuthority;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Tag(name = "Discussion")
@RequestMapping("/discussion")
@RestController
public class DiscussionController {


    private final DiscussionService discussionService;

    public DiscussionController(DiscussionService discussionService) {
        this.discussionService = discussionService;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @PostMapping("/comment")
    public IdResponse createComment(@RequestBody DiscussionCommentRequest discussionCommentRequest) {
        UUID id = discussionService.createComment(discussionCommentRequest.getDiscussionId(), Session.currentId(), discussionCommentRequest.getBody());

        return new IdResponse(id);
    }
}
