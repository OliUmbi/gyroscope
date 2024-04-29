package ch.oliumbi.gyroscope.core.incident;

import ch.oliumbi.compass.sql.input.Input;
import ch.oliumbi.gyroscope.database.Database;
import ch.oliumbi.gyroscope.errorhandling.InternalServerErrorException;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.core.incident.dtos.IncidentDTO;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class IncidentRepository {

    private Database database;

    public IncidentRepository(Database database) {
        this.database = database;
    }

    public List<IncidentDTO> load() {
        return database.query("""
                                SELECT  id,
                                        creator_profile_id,
                                        assignee_profile_id,
                                        discussion_id,
                                        title,
                                        system,
                                        time,
                                        incident_status,
                                        incident_severity,
                                        incident_type,
                                        created,
                                        updated
                                FROM    incident
                                WHERE   deleted = FALSE
                                ORDER BY time
                                INTO    id,
                                        creatorProfileId,
                                        assigneeProfileId,
                                        discussionId,
                                        title,
                                        system,
                                        time,
                                        incidentStatus,
                                        incidentSeverity,
                                        incidentType,
                                        created,
                                        updated
                                """,
                        IncidentDTO.class)
                .orElseThrow(() -> new InternalServerErrorException("failed to load incidents"));
    }

    public IncidentDTO load(UUID id) {
        return database.querySingle("""
                                SELECT  id,
                                        creator_profile_id,
                                        assignee_profile_id,
                                        discussion_id,
                                        title,
                                        system,
                                        time,
                                        incident_status,
                                        incident_severity,
                                        incident_type,
                                        created,
                                        updated
                                FROM    incident
                                WHERE   deleted = FALSE
                                AND     id = :id
                                INTO    id,
                                        creatorProfileId,
                                        assigneeProfileId,
                                        discussionId,
                                        title,
                                        system,
                                        time,
                                        incidentStatus,
                                        incidentSeverity,
                                        incidentType,
                                        created,
                                        updated
                                """,
                        IncidentDTO.class,
                        new Input("id", id))
                .orElseThrow(() -> new InternalServerErrorException("failed to load incident with id: " + id));
    }

    public List<IncidentCheckDTO> loadCheck(UUID incidentId) {
        return database.query("""
                                SELECT  id,
                                        incident_id,
                                        value,
                                        checked,
                                        created,
                                        updated
                                FROM    incident_check
                                WHERE   deleted = FALSE
                                AND     incident_id = :incidentId
                                ORDER BY created
                                INTO    id,
                                        incidentId,
                                        value,
                                        checked,
                                        created,
                                        updated
                                """,
                        IncidentCheckDTO.class,
                        new Input("incidentId", incidentId))
                .orElseThrow(() -> new InternalServerErrorException("failed to load incident check with incident id: " + incidentId));

    }

    public void create(IncidentDTO incidentDTO) {
        database.update("""
                                INSERT INTO incident (
                                        id,
                                        creator_profile_id,
                                        assignee_profile_id,
                                        discussion_id,
                                        title,
                                        system,
                                        time,
                                        incident_status,
                                        incident_severity,
                                        incident_type)
                                VALUES (
                                        :id,
                                        :creatorProfileId,
                                        :assigneeProfileId,
                                        :discussionId,
                                        :title,
                                        :system,
                                        :time,
                                        :incidentStatus,
                                        :incidentSeverity,
                                        :incidentType)
                                """,
                        incidentDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to create incident"));
    }

    public void createCheck(IncidentCheckDTO incidentCheckDTO) {
        database.update("""
                                INSERT INTO incident_check (
                                        id,
                                        incident_id,
                                        value,
                                        checked)
                                VALUES (
                                        :id,
                                        :incidentId,
                                        :value,
                                        :checked)
                                """,
                        incidentCheckDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to create incident check"));
    }

    public void update(IncidentDTO incidentDTO) {
        database.update("""
                                UPDATE  incident
                                SET     assignee_profile_id = :assigneeProfileId,
                                        title = :title,
                                        system = :system,
                                        time = :time,
                                        incident_status = :incidentStatus,
                                        incident_severity = :incidentSeverity,
                                        incident_type = :incidentType
                                WHERE   id = :id
                                AND     deleted = FALSE
                                """,
                        incidentDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to update incident"));
    }

    public void updateCheck(IncidentCheckDTO incidentCheckDTO) {
        database.update("""
                                UPDATE  incident_check
                                SET     value = :value,
                                        checked = :checked
                                WHERE   id = :id
                                AND     deleted = FALSE
                                """,
                        incidentCheckDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to update incident check"));
    }

    public void delete(UUID id) {
        database.update("""
                                UPDATE  incident
                                SET     deleted = TRUE
                                WHERE   id = :id
                                """,
                        new Input("id", id))
                .orElseThrow(() -> new InternalServerErrorException("failed to delete incident"));
    }

    public void deleteCheck(UUID id) {
        database.update("""
                                UPDATE  incident_check
                                SET     deleted = TRUE
                                WHERE   id = :id
                                """,
                        new Input("id", id))
                .orElseThrow(() -> new InternalServerErrorException("failed to delete incident check"));
    }
}
