package ch.oliumbi.gyroscope.security;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@Setter
@Configuration
@ConfigurationProperties(prefix = "security")
public class SecurityProperties {

    private String header;
    private Long expirationInHours;
    private String[] excluded;
    private String[] origins;

    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
}
