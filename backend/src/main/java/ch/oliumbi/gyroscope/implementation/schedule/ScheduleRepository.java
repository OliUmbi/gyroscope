package ch.oliumbi.gyroscope.implementation.schedule;

import ch.oliumbi.compass.sql.input.Input;
import ch.oliumbi.gyroscope.configs.Database;
import ch.oliumbi.gyroscope.errorhandling.InternalServerErrorException;
import ch.oliumbi.gyroscope.implementation.schedule.dtos.ScheduleDTO;
import ch.oliumbi.gyroscope.implementation.task.dtos.TaskDTO;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class ScheduleRepository {

    private Database database;

    public ScheduleRepository(Database database) {
        this.database = database;
    }

    public List<TaskDTO> load() {
        return database.query("""
                                SELECT  id,
                                        profile_id,
                                        time,
                                        schedule_shift,
                                        created,
                                        updated
                                FROM    schedule
                                WHERE   deleted = FALSE
                                AND     time > current_timestamp - interval '3 hours'
                                ORDER BY time
                                INTO    id,
                                        profileId,
                                        time,
                                        scheduleShift,
                                        created,
                                        updated
                                """,
                        TaskDTO.class)
                .orElseThrow(() -> new InternalServerErrorException("failed to load tasks"));
    }

    public TaskDTO load(UUID profileId) {
        return database.querySingle("""
                                SELECT  id,
                                        profile_id,
                                        time,
                                        schedule_shift,
                                        created,
                                        updated
                                FROM    schedule
                                WHERE   deleted = FALSE
                                AND     profile_id = :profileId
                                ORDER BY time DESC
                                INTO    id,
                                        profileId,
                                        time,
                                        scheduleShift,
                                        created,
                                        updated
                                """,
                        TaskDTO.class,
                        new Input("profileId", profileId))
                .orElseThrow(() -> new InternalServerErrorException("failed to load task with id: " + id));
    }

    public void create(ScheduleDTO scheduleDTO) {
        database.update("""
                                INSERT INTO schedule (
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

    public void update(ScheduleDTO scheduleDTO) {
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
}
