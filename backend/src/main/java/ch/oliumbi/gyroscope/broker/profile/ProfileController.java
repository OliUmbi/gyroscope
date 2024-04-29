package ch.oliumbi.gyroscope.broker.profile;

import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.requests.IdRequest;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ProfileController {

    private final ProfileMapper profileMapper;

    public ProfileController(ProfileMapper profileMapper) {
        this.profileMapper = profileMapper;
    }

    @MessageMapping("/load/profile")
    @SendTo("/profile/loadId")
    public ProfileResponse load(IdRequest idRequest) {

        return profileMapper.load(idRequest.getId());
    }
}
