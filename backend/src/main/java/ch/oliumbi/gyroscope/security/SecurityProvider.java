package ch.oliumbi.gyroscope.security;

import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.errorhandling.NotFoundException;
import ch.oliumbi.gyroscope.errorhandling.UnauthorizedException;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
public class SecurityProvider implements AuthenticationProvider {

    private final ProfileService profileService;

    public SecurityProvider(ProfileService profileService) {
        this.profileService = profileService;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String token = (String) authentication.getCredentials();
        ProfileDTO profileDTO = profileService.load(token);

        return new SecurityToken(token, profileDTO);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return SecurityToken.class.isAssignableFrom(authentication);
    }
}
