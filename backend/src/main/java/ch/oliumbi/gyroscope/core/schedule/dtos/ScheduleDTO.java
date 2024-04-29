package ch.oliumbi.gyroscope.core.schedule.dtos;

import ch.oliumbi.gyroscope.core.dtos.MetaDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.schedule.enums.ScheduleShift;
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
}
