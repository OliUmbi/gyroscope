package ch.oliumbi.gyroscope.implementation.schedule.dtos;

import ch.oliumbi.gyroscope.dtos.MetaDTO;
import ch.oliumbi.gyroscope.implementation.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.implementation.schedule.enums.ScheduleShift;
import ch.oliumbi.gyroscope.implementation.task.enums.TaskPriority;
import ch.oliumbi.gyroscope.implementation.task.enums.TaskStatus;
import jdk.vm.ci.meta.Local;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ScheduleDTO extends MetaDTO {
    private UUID id;
    private UUID profileId;
    private LocalDateTime time;
    private ScheduleShift scheduleShift;

    private ProfileDTO profileDTO;
}
