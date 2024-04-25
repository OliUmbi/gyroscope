package ch.oliumbi.gyroscope.implementation.incident;

import ch.oliumbi.gyroscope.implementation.discussion.DiscussionService;
import ch.oliumbi.gyroscope.implementation.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.implementation.discussion.dtos.DiscussionDTO;
import ch.oliumbi.gyroscope.implementation.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.implementation.incident.dtos.IncidentDTO;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentSeverity;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentStatus;
import ch.oliumbi.gyroscope.implementation.incident.enums.IncidentType;
import ch.oliumbi.gyroscope.implementation.profile.ProfileService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class IncidentService {

    private final IncidentRepository incidentRepository;

    public IncidentService(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    public List<IncidentDTO> load() {
        List<IncidentDTO> incidentDTOs = incidentRepository.load();

        for (IncidentDTO incidentDTO : incidentDTOs) {
            incidentDTO.setIncidentCheckDTOs(incidentRepository.loadCheck(incidentDTO.getId()));
        }

        return incidentDTOs;
    }

    public IncidentDTO load(UUID id) {
        IncidentDTO incidentDTO = incidentRepository.load(id);
        incidentDTO.setIncidentCheckDTOs(incidentRepository.loadCheck(incidentDTO.getId()));

        return incidentDTO;
    }

    public UUID create(UUID creatorProfileId, UUID assigneeProfileId, UUID discussionId, String title, String system, LocalDateTime time, IncidentStatus incidentStatus, IncidentSeverity incidentSeverity, IncidentType incidentType) {
        UUID id = UUID.randomUUID();

        IncidentDTO incidentDTO = new IncidentDTO();
        incidentDTO.setId(id);
        incidentDTO.setCreatorProfileId(creatorProfileId);
        incidentDTO.setAssigneeProfileId(assigneeProfileId);
        incidentDTO.setDiscussionId(discussionId);
        incidentDTO.setTitle(title);
        incidentDTO.setSystem(system);
        incidentDTO.setTime(time);
        incidentDTO.setIncidentStatus(incidentStatus);
        incidentDTO.setIncidentSeverity(incidentSeverity);
        incidentDTO.setIncidentType(incidentType);

        incidentRepository.create(incidentDTO);

        return id;
    }

    public UUID createCheck(UUID incidentId, String value, Boolean checked) {
        UUID id = UUID.randomUUID();

        IncidentCheckDTO incidentCheckDTO = new IncidentCheckDTO();
        incidentCheckDTO.setId(id);
        incidentCheckDTO.setIncidentId(incidentId);
        incidentCheckDTO.setValue(value);
        incidentCheckDTO.setChecked(checked);

        incidentRepository.createCheck(incidentCheckDTO);

        return id;
    }

    public void update(UUID id, UUID assigneeProfileId, String title, String system, LocalDateTime time, IncidentStatus incidentStatus, IncidentSeverity incidentSeverity, IncidentType incidentType) {
        IncidentDTO incidentDTO = new IncidentDTO();
        incidentDTO.setId(id);
        incidentDTO.setAssigneeProfileId(assigneeProfileId);
        incidentDTO.setTitle(title);
        incidentDTO.setSystem(system);
        incidentDTO.setTime(time);
        incidentDTO.setIncidentStatus(incidentStatus);
        incidentDTO.setIncidentSeverity(incidentSeverity);
        incidentDTO.setIncidentType(incidentType);

        incidentRepository.update(incidentDTO);
    }

    public void updateCheck(UUID id, String value, Boolean checked) {
        IncidentCheckDTO incidentCheckDTO = new IncidentCheckDTO();
        incidentCheckDTO.setId(id);
        incidentCheckDTO.setValue(value);
        incidentCheckDTO.setChecked(checked);

        incidentRepository.updateCheck(incidentCheckDTO);
    }

    public void delete(UUID id) {
        incidentRepository.delete(id);
    }

    public void deleteCheck(UUID id) {
        incidentRepository.deleteCheck(id);
    }
}
