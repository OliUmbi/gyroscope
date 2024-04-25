package ch.oliumbi.gyroscope.configs;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@Configuration
@ConfigurationProperties(prefix = "security")
public class SecurityProperties {

  private String header;
  private Long expirationInHours;

  /**
   * Define api paths to exclude them from token authentication
   */
  private String[] excluded = {
      "/docs/**",
      "/v3/api-docs/**",
      "/swagger-ui/**",
      "/login"
  };
}
