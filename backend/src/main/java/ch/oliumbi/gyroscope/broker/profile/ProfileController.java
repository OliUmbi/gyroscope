package ch.oliumbi.gyroscope.broker.profile;

import ch.oliumbi.gyroscope.broker.profile.requests.ProfileCreateScheduleRequest;
import ch.oliumbi.gyroscope.broker.profile.requests.ProfileUpdateScheduleRequest;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileScheduleDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Controller
public class ProfileController {

    private final ProfileMapper profileMapper;
    private final ProfileService profileService;

    public ProfileController(ProfileMapper profileMapper, ProfileService profileService) {
        this.profileMapper = profileMapper;
        this.profileService = profileService;
    }

    @MessageMapping("/profile")
    @SendTo("/profile")
    public List<ProfileResponse> load() {
        List<ProfileDTO> profileDTOs = profileService.load();

        List<ProfileResponse> profileResponses = new ArrayList<>();
        for (ProfileDTO profileDTO : profileDTOs) {
            ProfileResponse profileResponse = profileMapper.map(profileDTO);

            profileResponses.add(profileResponse);
        }

        return profileResponses;
    }

    @MessageMapping("/profile/schedule")
    @SendTo("/profile/schedule")
    public List<ProfileResponse> loadSchedule() {
        List<ProfileDTO> profileDTOs = profileService.load();

        List<ProfileResponse> profileResponses = new ArrayList<>();
        for (ProfileDTO profileDTO : profileDTOs) {
            ProfileResponse profileResponse = profileMapper.map(profileDTO);

            List<ProfileScheduleDTO> profileScheduleDTOs = profileService.loadSchedule(profileDTO.getId());
            for (ProfileScheduleDTO profileScheduleDTO : profileScheduleDTOs) {
                profileResponse.getSchedule().add(profileMapper.mapSchedule(profileScheduleDTO));
            }

            profileResponses.add(profileResponse);
        }

        return profileResponses;
    }

    @MessageMapping("/profile/id")
    @SendTo("/profile/id")
    public ProfileResponse loadId() {
        // todo session handling
        ProfileDTO profileDTO = profileService.load(UUID.fromString("aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee"));

        ProfileResponse profileResponse = profileMapper.map(profileDTO);

        List<ProfileSessionDTO> profileSessionDTOs = profileService.loadSessions(profileDTO.getId());
        for (ProfileSessionDTO profileSessionDTO : profileSessionDTOs) {
            profileResponse.getSessions().add(profileMapper.mapSession(profileSessionDTO));
        }

        List<ProfileScheduleDTO> profileScheduleDTOs = profileService.loadSchedule(profileDTO.getId());
        for (ProfileScheduleDTO profileScheduleDTO : profileScheduleDTOs) {
            profileResponse.getSchedule().add(profileMapper.mapSchedule(profileScheduleDTO));
        }

        return profileResponse;
    }

    @MessageMapping("/profile/schedule/id")
    @SendTo("/profile/schedule/id")
    public ProfileResponse loadScheduleId() {
        // todo session handling
        ProfileDTO profileDTO = profileService.load(UUID.fromString("aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee"));

        ProfileResponse profileResponse = profileMapper.map(profileDTO);

        List<ProfileScheduleDTO> profileScheduleDTOs = profileService.loadSchedule(profileDTO.getId());
        for (ProfileScheduleDTO profileScheduleDTO : profileScheduleDTOs) {
            profileResponse.getSchedule().add(profileMapper.mapSchedule(profileScheduleDTO));
        }

        return profileResponse;
    }

    @MessageMapping("/profile/schedule/create")
    @SendTo("/profile/schedule/id")
    public ProfileResponse createSchedule(ProfileCreateScheduleRequest profileCreateScheduleRequest) {
        // todo success?
        // todo send new data
        profileService.createSchedule(profileCreateScheduleRequest.getShift());

        return loadScheduleId();
    }

    @MessageMapping("/profile/schedule/update")
    @SendTo("/profile/schedule/id")
    public ProfileResponse updatedSchedule(ProfileUpdateScheduleRequest profileUpdateScheduleRequest) {
        profileService.updateSchedule(profileUpdateScheduleRequest.getId(), profileUpdateScheduleRequest.getShift());

        return loadScheduleId();
    }
}
