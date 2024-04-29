package ch.oliumbi.gyroscope.broker.profile;

import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileScheduleResponse;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileSessionResponse;
import ch.oliumbi.gyroscope.broker.requests.IdRequest;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileScheduleDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ProfileMapper {

    private final ProfileService profileService;

    public ProfileMapper(ProfileService profileService) {
        this.profileService = profileService;
    }

    public ProfileResponse load(UUID id) {
        ProfileDTO profileDTO = profileService.load(id);

        ProfileResponse profileResponse = new ProfileResponse();
        profileResponse.setId(profileDTO.getId());
        profileResponse.setName(profileDTO.getName());

        return profileResponse;
    }

    public ProfileResponse loadSession(UUID id) {

        ProfileDTO profileDTO = profileService.loadSession(id);

        ProfileResponse profileResponse = new ProfileResponse();
        profileResponse.setId(profileDTO.getId());
        profileResponse.setName(profileDTO.getName());

        List<ProfileSessionResponse> sessions = new ArrayList<>();
        for (ProfileSessionDTO profileSessionDTO : profileDTO.getProfileSessionDTOs()) {
            ProfileSessionResponse session = new ProfileSessionResponse();
            session.setId(profileSessionDTO.getId());
            session.setExpires(profileSessionDTO.getExpires());
            session.setCreated(profileSessionDTO.getCreated());

            sessions.add(session);
        }
        profileResponse.setSessions(sessions);

        return profileResponse;
    }

    public ProfileResponse loadSchedule(UUID id) {

        ProfileDTO profileDTO = profileService.loadSchedule(id);

        ProfileResponse profileResponse = new ProfileResponse();
        profileResponse.setId(profileDTO.getId());
        profileResponse.setName(profileDTO.getName());

        List<ProfileScheduleResponse> schedules = new ArrayList<>();
        for (ProfileScheduleDTO profileScheduleDTO : profileDTO.getProfileScheduleDTOs()) {
            ProfileScheduleResponse schedule = new ProfileScheduleResponse();
            schedule.setId(profileScheduleDTO.getId());
            schedule.setTime(profileScheduleDTO.getTime());
            schedule.setShift(profileScheduleDTO.getProfileScheduleShift());

            schedules.add(schedule);
        }
        profileResponse.setSchedule(schedules);

        return profileResponse;
    }

    public List<ProfileResponse> loadSchedule() {

        List<ProfileDTO> profileDTOs = profileService.loadSchedule();

        List<ProfileResponse> profileResponses = new ArrayList<>();
        for (ProfileDTO profileDTO : profileDTOs) {
            ProfileResponse profileResponse = new ProfileResponse();
            profileResponse.setId(profileDTO.getId());
            profileResponse.setName(profileDTO.getName());

            List<ProfileScheduleResponse> schedules = new ArrayList<>();
            for (ProfileScheduleDTO profileScheduleDTO : profileDTO.getProfileScheduleDTOs()) {
                ProfileScheduleResponse schedule = new ProfileScheduleResponse();
                schedule.setId(profileScheduleDTO.getId());
                schedule.setTime(profileScheduleDTO.getTime());
                schedule.setShift(profileScheduleDTO.getProfileScheduleShift());

                schedules.add(schedule);
            }
            profileResponse.setSchedule(schedules);

            profileResponses.add(profileResponse);
        }

        return profileResponses;
    }
}
