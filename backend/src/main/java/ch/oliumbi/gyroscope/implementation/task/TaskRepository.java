package ch.oliumbi.gyroscope.implementation.task;

import ch.oliumbi.compass.sql.input.Input;
import ch.oliumbi.gyroscope.configs.Database;
import ch.oliumbi.gyroscope.errorhandling.InternalServerErrorException;
import ch.oliumbi.gyroscope.implementation.incident.dtos.IncidentCheckDTO;
import ch.oliumbi.gyroscope.implementation.incident.dtos.IncidentDTO;
import ch.oliumbi.gyroscope.implementation.task.dtos.TaskDTO;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class TaskRepository {

    private Database database;

    public TaskRepository(Database database) {
        this.database = database;
    }

    public List<TaskDTO> load() {
        return database.query("""
                                SELECT  id,
                                        creator_profile_id,
                                        assignee_profile_id,
                                        discussion_id,
                                        title,
                                        task_status,
                                        task_priority,
                                        created,
                                        updated
                                FROM    task
                                WHERE   deleted = FALSE
                                INTO    id,
                                        creatorProfileId,
                                        assigneeProfileId,
                                        discussionId,
                                        title,
                                        taskStatus,
                                        taskPriority,
                                        created,
                                        updated
                                """,
                        TaskDTO.class)
                .orElseThrow(() -> new InternalServerErrorException("failed to load tasks"));
    }

    public TaskDTO load(UUID id) {
        return database.querySingle("""
                                SELECT  id,
                                        creator_profile_id,
                                        assignee_profile_id,
                                        discussion_id,
                                        title,
                                        task_status,
                                        task_priority,
                                        created,
                                        updated
                                FROM    task
                                WHERE   deleted = FALSE
                                AND     id = :id
                                INTO    id,
                                        creatorProfileId,
                                        assigneeProfileId,
                                        discussionId,
                                        title,
                                        taskStatus,
                                        taskPriority,
                                        created,
                                        updated
                                """,
                        TaskDTO.class,
                        new Input("id", id))
                .orElseThrow(() -> new InternalServerErrorException("failed to load task with id: " + id));
    }

    public void create(TaskDTO taskDTO) {
        database.update("""
                                INSERT INTO task (
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
                        taskDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to create task"));
    }

    public void update(TaskDTO taskDTO) {
        database.update("""
                                UPDATE  task
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
                        taskDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to update task"));
    }

    public void delete(UUID id) {
        database.update("""
                                UPDATE  task
                                SET     deleted = TRUE
                                WHERE   id = :id
                                """,
                        new Input("id", id))
                .orElseThrow(() -> new InternalServerErrorException("failed to delete task"));
    }
}
