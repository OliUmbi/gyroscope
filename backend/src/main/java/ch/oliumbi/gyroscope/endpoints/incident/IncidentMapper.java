package ch.oliumbi.gyroscope.endpoints.incident;

import ch.oliumbi.gyroscope.endpoints.incident.responses.IncidentCheckResponse;
import ch.oliumbi.gyroscope.endpoints.incident.responses.IncidentResponse;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class IncidentMapper {

    public IncidentResponse map(IncidentDTO incidentDTO) {
        IncidentResponse incidentResponse = new IncidentResponse();
        incidentResponse.setId(incidentDTO.getId());
        incidentResponse.setTitle(incidentDTO.getTitle());
        incidentResponse.setSystem(incidentDTO.getSystem());
        incidentResponse.setTime(incidentDTO.getTime());
        incidentResponse.setStatus(incidentDTO.getIncidentStatus());
        incidentResponse.setSeverity(incidentDTO.getIncidentSeverity());
        incidentResponse.setType(incidentDTO.getIncidentType());
        incidentResponse.setChecks(new ArrayList<>());
        incidentResponse.setDiscussionId(incidentDTO.getDiscussionId());
        incidentResponse.setCreated(incidentDTO.getCreated());
        incidentResponse.setUpdated(incidentDTO.getUpdated());

        return incidentResponse;
    }

    public IncidentCheckResponse mapCheck(IncidentCheckDTO incidentCheckDTO) {
        IncidentCheckResponse incidentCheckResponse = new IncidentCheckResponse();
        incidentCheckResponse.setId(incidentCheckDTO.getId());
        incidentCheckResponse.setValue(incidentCheckDTO.getValue());
        incidentCheckResponse.setChecked(incidentCheckDTO.getChecked());

        return incidentCheckResponse;
    }
}
