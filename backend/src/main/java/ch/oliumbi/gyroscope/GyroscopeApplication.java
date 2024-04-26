package ch.oliumbi.gyroscope;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
public class GyroscopeApplication {

  public static void main(String[] args) {
    SpringApplication.run(GyroscopeApplication.class, args);
  }
}
