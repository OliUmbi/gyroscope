package ch.oliumbi.gyroscope.endpoints.authentication;

import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
import ch.oliumbi.gyroscope.endpoints.authentication.responses.AuthenticationResponse;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationMapper {

    public AuthenticationResponse map(ProfileSessionDTO profileSessionDTO) {
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setProfileId(profileSessionDTO.getProfileId());
        authenticationResponse.setToken(profileSessionDTO.getToken());
        authenticationResponse.setExpires(profileSessionDTO.getExpires());

        return authenticationResponse;
    }
}
