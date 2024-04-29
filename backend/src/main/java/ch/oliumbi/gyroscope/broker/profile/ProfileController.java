package ch.oliumbi.gyroscope.broker.profile;

import ch.oliumbi.gyroscope.broker.profile.requests.ProfileCreateScheduleRequest;
import ch.oliumbi.gyroscope.broker.profile.requests.ProfileUpdateScheduleRequest;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.requests.IdRequest;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

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

    @MessageMapping("/load/profileSession")
    @SendTo("/profile/loadSessionId")
    public ProfileResponse loadSession() {
        return profileMapper.loadSession(UUID.fromString("aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee"));
    }

    @MessageMapping("/load/profileSchedule")
    @SendTo("/profile/loadScheduleId")
    public ProfileResponse loadSchedule() {
        return profileMapper.loadSchedule(UUID.fromString("aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee"));
    }

    @MessageMapping("/load/profileSchedules")
    @SendTo("/profile/loadScheduleAll")
    public List<ProfileResponse> loadSchedules() {
        return profileMapper.loadSchedule();
    }

    @MessageMapping("/create/profileSchedule")
    @SendTo("/profile/loadScheduleId")
    public ProfileResponse createSchedule(ProfileCreateScheduleRequest profileCreateScheduleRequest) {
        profileService.createSchedule(profileCreateScheduleRequest.getShift());

        return profileMapper.loadSchedule(UUID.fromString("aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee"));
    }

    @MessageMapping("/update/profileSchedule")
    @SendTo("/profile/loadScheduleId")
    public ProfileResponse updatedSchedule(ProfileUpdateScheduleRequest profileUpdateScheduleRequest) {
        profileService.updateSchedule(profileUpdateScheduleRequest.getId(), profileUpdateScheduleRequest.getShift());

        return profileMapper.loadSchedule(UUID.fromString("aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee"));
    }
}
