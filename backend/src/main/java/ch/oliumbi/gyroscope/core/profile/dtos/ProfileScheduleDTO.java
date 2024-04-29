package ch.oliumbi.gyroscope.core.profile.dtos;

import ch.oliumbi.gyroscope.core.dtos.MetaDTO;
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
public class ProfileScheduleDTO extends MetaDTO {
    private UUID id;
    private UUID profileId;
    private LocalDateTime time;
    private ProfileScheduleShift profileScheduleShift;
}
