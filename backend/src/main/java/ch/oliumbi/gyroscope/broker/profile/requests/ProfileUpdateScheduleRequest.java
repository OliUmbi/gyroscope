package ch.oliumbi.gyroscope.broker.profile.requests;

import ch.oliumbi.gyroscope.core.profile.enums.ProfileScheduleShift;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileUpdateScheduleRequest {
    private UUID id;
    private ProfileScheduleShift shift;
}
