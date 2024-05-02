package ch.oliumbi.gyroscope.endpoints;

import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.errorhandling.InternalServerErrorException;
import ch.oliumbi.gyroscope.security.SecurityToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.UUID;

public class Session {

    public static ProfileDTO current() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication instanceof SecurityToken) {
            return (ProfileDTO) authentication.getPrincipal();
        }

        return null;
    }

    public static UUID currentId() {
        ProfileDTO current = current();
        if (current == null) {
            throw new InternalServerErrorException("failed to get current session");
        }
        return current.getId();
    }
}
