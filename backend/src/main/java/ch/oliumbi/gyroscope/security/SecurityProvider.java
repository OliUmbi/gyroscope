package ch.oliumbi.gyroscope.security;

import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.errorhandling.NotFoundException;
import ch.oliumbi.gyroscope.errorhandling.UnauthorizedException;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
public class SecurityProvider implements AuthenticationProvider {

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String token = (String) authentication.getCredentials();

        try {
            return new SecurityToken(token, new ProfileDTO());
        } catch (NotFoundException ignored) {
            throw new UnauthorizedException("profile not found");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return SecurityToken.class.isAssignableFrom(authentication);
    }
}
