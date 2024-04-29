package ch.oliumbi.gyroscope.core.schedule;

import ch.oliumbi.compass.sql.input.Input;
import ch.oliumbi.gyroscope.database.Database;
import ch.oliumbi.gyroscope.errorhandling.InternalServerErrorException;
import ch.oliumbi.gyroscope.core.schedule.dtos.ScheduleDTO;
import ch.oliumbi.gyroscope.core.task.dtos.TaskDTO;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class ScheduleRepository {

    private Database database;

    public ScheduleRepository(Database database) {
        this.database = database;
    }

    public List<ScheduleDTO> load() {
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
                        ScheduleDTO.class)
                .orElseThrow(() -> new InternalServerErrorException("failed to load schedules"));
    }

    public ScheduleDTO load(UUID profileId) {
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
                        ScheduleDTO.class,
                        new Input("profileId", profileId))
                .orElseThrow(() -> new InternalServerErrorException("failed to load schedule with profile id: " + profileId));
    }

    public void create(ScheduleDTO scheduleDTO) {
        database.update("""
                                INSERT INTO schedule (
                                        id,
                                        profile_id,
                                        time,
                                        schedule_shift)
                                VALUES (
                                        :id,
                                        :profileId,
                                        :time,
                                        :scheduleShift)
                                """,
                        scheduleDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to create schedule"));
    }

    public void update(ScheduleDTO scheduleDTO) {
        database.update("""
                                UPDATE  schedule
                                SET     time = :time,
                                        schedule_shift = :scheduleShift
                                WHERE   id = :id
                                AND     deleted = FALSE
                                """,
                        scheduleDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to update schedule"));
    }
}
