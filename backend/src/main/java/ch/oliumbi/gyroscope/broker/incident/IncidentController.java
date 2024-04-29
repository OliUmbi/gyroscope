package ch.oliumbi.gyroscope.broker.incident;

import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentCheckResponse;
import ch.oliumbi.gyroscope.broker.incident.responses.IncidentResponse;
import ch.oliumbi.gyroscope.broker.profile.ProfileController;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.requests.IdRequest;
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

    private final IncidentMapper incidentMapper;

    public IncidentController(IncidentMapper incidentMapper) {
        this.incidentMapper = incidentMapper;
    }

    @MessageMapping("/load/incidents")
    @SendTo("/incident/loadAll")
    public List<IncidentResponse> load() {

        return incidentMapper.load();
    }

    @MessageMapping("/load/incident")
    @SendTo("/incident/loadId")
    public IncidentResponse load(IdRequest idRequest) {

        return incidentMapper.load(idRequest.getId());
    }
}
