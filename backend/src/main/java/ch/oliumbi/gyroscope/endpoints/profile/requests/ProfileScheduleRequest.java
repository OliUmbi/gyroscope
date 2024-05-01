package ch.oliumbi.gyroscope.endpoints.profile.requests;

import ch.oliumbi.gyroscope.core.profile.enums.ProfileScheduleShift;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileScheduleRequest {
    private ProfileScheduleShift shift;
}
