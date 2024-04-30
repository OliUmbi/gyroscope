package ch.oliumbi.gyroscope.broker.profile;

import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileScheduleResponse;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileSessionResponse;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileScheduleDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProfileMapper {

    private final ProfileService profileService;

    public ProfileMapper(ProfileService profileService) {
        this.profileService = profileService;
    }

    public ProfileResponse map(ProfileDTO profileDTO) {
        ProfileResponse profileResponse = new ProfileResponse();
        profileResponse.setId(profileDTO.getId());
        profileResponse.setName(profileDTO.getName());
        profileResponse.setSchedule(new ArrayList<>());
        profileResponse.setSessions(new ArrayList<>());

        return profileResponse;
    }

    public ProfileSessionResponse mapSession(ProfileSessionDTO profileSessionDTO) {
        ProfileSessionResponse profileSessionResponse = new ProfileSessionResponse();
        profileSessionResponse.setId(profileSessionDTO.getId());
        profileSessionResponse.setExpires(profileSessionDTO.getExpires());
        profileSessionResponse.setCreated(profileSessionDTO.getCreated());

        return profileSessionResponse;
    }

    public ProfileScheduleResponse mapSchedule(ProfileScheduleDTO profileScheduleDTO) {
        ProfileScheduleResponse profileScheduleResponse = new ProfileScheduleResponse();
        profileScheduleResponse.setId(profileScheduleDTO.getId());
        profileScheduleResponse.setTime(profileScheduleDTO.getTime());
        profileScheduleResponse.setShift(profileScheduleDTO.getProfileScheduleShift());

        return profileScheduleResponse;
    }
}
