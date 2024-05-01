package ch.oliumbi.gyroscope.endpoints.profile.responses;

import ch.oliumbi.gyroscope.core.profile.enums.ProfileScheduleShift;
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
public class ProfileScheduleResponse {
    private UUID id;
    private LocalDateTime time;
    private ProfileScheduleShift shift;
}
