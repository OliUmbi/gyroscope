package ch.oliumbi.gyroscope.configs;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@Configuration
@ConfigurationProperties(prefix = "database")
public class DatabaseProperties {

  private String host;
  private String port;
  private String database;
  private String username;
  private String password;
}
