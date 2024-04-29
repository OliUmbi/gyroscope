package ch.oliumbi.gyroscope.core.schedule;

import ch.oliumbi.gyroscope.core.schedule.dtos.ScheduleDTO;
import ch.oliumbi.gyroscope.core.schedule.enums.ScheduleShift;
import ch.oliumbi.gyroscope.core.task.dtos.TaskDTO;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ScheduleService {

    private final ScheduleRepository scheduleRepository;

    public ScheduleService(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    public List<ScheduleDTO> load() {
        return scheduleRepository.load();
    }

    public ScheduleDTO load(UUID id) {
        return scheduleRepository.load(id);
    }

    public UUID create(UUID profileId, LocalDateTime time, ScheduleShift scheduleShift) {
        UUID id = UUID.randomUUID();

        ScheduleDTO scheduleDTO = new ScheduleDTO();
        scheduleDTO.setId(id);
        scheduleDTO.setProfileId(profileId);
        scheduleDTO.setTime(time);
        scheduleDTO.setScheduleShift(scheduleShift);

        scheduleRepository.create(scheduleDTO);

        return id;
    }

    public void update(UUID id, LocalDateTime time, ScheduleShift scheduleShift) {
        ScheduleDTO scheduleDTO = new ScheduleDTO();
        scheduleDTO.setId(id);
        scheduleDTO.setTime(time);
        scheduleDTO.setScheduleShift(scheduleShift);

        scheduleRepository.update(scheduleDTO);
    }
}
