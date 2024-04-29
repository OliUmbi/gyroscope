package ch.oliumbi.gyroscope.broker.schedule.responses;

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
public class ScheduleResponse {
    private UUID id;
    private LocalDateTime time;
    private ScheduleShift shift;
    private ProfileDTO profile;
}
