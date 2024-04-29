package ch.oliumbi.gyroscope.broker.profile;

import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.broker.profile.responses.ProfileSessionResponse;
import ch.oliumbi.gyroscope.broker.requests.IdRequest;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
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
}
