package ch.oliumbi.gyroscope.security;

import org.springframework.security.core.GrantedAuthority;

public class SecurityAuthority implements GrantedAuthority {

    public static final String AUTHENTICATED = "AUTHENTICATED";

    @Override
    public String getAuthority() {
        return AUTHENTICATED;
    }
}
