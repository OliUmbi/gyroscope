package ch.oliumbi.gyroscope.endpoints.authentication;

import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
import ch.oliumbi.gyroscope.endpoints.authentication.requests.AuthenticationRequest;
import ch.oliumbi.gyroscope.endpoints.authentication.responses.AuthenticationResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@Tag(name = "Authentication")
@RequestMapping("/authentication")
@RestController
public class AuthenticationController {

    private final ProfileService profileService;
    private final AuthenticationMapper authenticationMapper;

    public AuthenticationController(ProfileService profileService, AuthenticationMapper authenticationMapper) {
        this.profileService = profileService;
        this.authenticationMapper = authenticationMapper;
    }

    @PostMapping("/login")
    public AuthenticationResponse login(@RequestBody AuthenticationRequest authenticationRequest) {
        ProfileSessionDTO profileSessionDTO = profileService.login(authenticationRequest.getName(), authenticationRequest.getPassword());

        AuthenticationResponse authenticationResponse = authenticationMapper.map(profileSessionDTO);

        return authenticationResponse;
    }
}
