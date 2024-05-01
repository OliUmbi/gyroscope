package ch.oliumbi.gyroscope.security;

import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;

import java.util.Collections;

public class SecurityToken extends AbstractAuthenticationToken {

    private final String token;
    private final ProfileDTO profileDTO;

    public SecurityToken(String token, ProfileDTO profileDTO) {
        super(Collections.singletonList(new SecurityAuthority()));
        this.token = token;
        this.profileDTO = profileDTO;
        setAuthenticated(true);
    }

    public SecurityToken(String token) {
        super(AuthorityUtils.NO_AUTHORITIES);
        this.token = token;
        this.profileDTO = null;
        setAuthenticated(false);
    }

    @Override
    public Object getCredentials() {
        return token;
    }

    @Override
    public Object getPrincipal() {
        return profileDTO;
    }
}
