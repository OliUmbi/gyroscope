package ch.oliumbi.gyroscope.broker.incident;

import ch.oliumbi.gyroscope.broker.discussion.DiscussionMapper;
import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentCheckResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentResponse;
import ch.oliumbi.gyroscope.broker.profile.ProfileMapper;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.requests.IdRequest;
import ch.oliumbi.gyroscope.core.incident.IncidentService;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class IncidentMapper {

    private final IncidentService incidentService;
    private final ProfileMapper profileMapper;
    private final DiscussionMapper discussionMapper;

    public IncidentMapper(IncidentService incidentService, ProfileMapper profileMapper, DiscussionMapper discussionMapper) {
        this.incidentService = incidentService;
        this.profileMapper = profileMapper;
        this.discussionMapper = discussionMapper;
    }

    public List<IncidentResponse> load() {
        List<IncidentDTO> incidentDTOs = incidentService.load();

        List<IncidentResponse> incidentResponses = new ArrayList<>();
        for (IncidentDTO incidentDTO : incidentDTOs) {
            IncidentResponse incidentResponse = new IncidentResponse();
            incidentResponse.setId(incidentDTO.getId());
            incidentResponse.setTitle(incidentDTO.getTitle());
            incidentResponse.setTime(incidentDTO.getTime());
            incidentResponse.setStatus(incidentDTO.getIncidentStatus());
            incidentResponse.setSeverity(incidentDTO.getIncidentSeverity());
            incidentResponse.setType(incidentDTO.getIncidentType());
            incidentResponse.setCreated(incidentDTO.getCreated());

            incidentResponses.add(incidentResponse);
        }

        return incidentResponses;
    }

    public IncidentResponse load(UUID id) {

        IncidentDTO incidentDTO = incidentService.load(id);

        IncidentResponse incidentResponse = new IncidentResponse();
        incidentResponse.setId(incidentDTO.getId());
        incidentResponse.setTitle(incidentDTO.getTitle());
        incidentResponse.setSystem(incidentDTO.getSystem());
        incidentResponse.setTime(incidentDTO.getTime());
        incidentResponse.setStatus(incidentDTO.getIncidentStatus());
        incidentResponse.setSeverity(incidentDTO.getIncidentSeverity());
        incidentResponse.setType(incidentDTO.getIncidentType());

        List<IncidentCheckResponse> checks = new ArrayList<>();
        for (IncidentCheckDTO incidentCheckDTO : incidentDTO.getIncidentCheckDTOs()) {
            IncidentCheckResponse check = new IncidentCheckResponse();
            check.setId(incidentCheckDTO.getId());
            check.setValue(incidentCheckDTO.getValue());
            check.setChecked(incidentCheckDTO.getChecked());

            checks.add(check);
        }
        incidentResponse.setChecks(checks);

        ProfileResponse creator = profileMapper.load(incidentDTO.getCreatorProfileId());
        incidentResponse.setCreator(creator);

        ProfileResponse assignee = profileMapper.load(incidentDTO.getAssigneeProfileId());
        incidentResponse.setAssignee(assignee);

        DiscussionResponse discussion = discussionMapper.load(incidentDTO.getDiscussionId());
        incidentResponse.setDiscussion(discussion);

        incidentResponse.setCreated(incidentDTO.getCreated());
        incidentResponse.setUpdated(incidentDTO.getUpdated());

        return incidentResponse;
    }
}
