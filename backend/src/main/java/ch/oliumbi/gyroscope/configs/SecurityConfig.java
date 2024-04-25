package ch.oliumbi.gyroscope.configs;

import java.util.Arrays;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true, prePostEnabled = false)
public class SecurityConfig {

  private final SecurityProperties securityProperties;
  private final SecurityProvider securityProvider;

  public SecurityConfig(SecurityProperties securityProperties, SecurityProvider securityProvider) {
    this.securityProperties = securityProperties;
    this.securityProvider = securityProvider;
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, AuthenticationManager authenticationManager) throws Exception {
    httpSecurity
        .addFilterBefore(new SecurityFilter(securityProperties, authenticationManager), AuthorizationFilter.class)
        .authorizeHttpRequests(authorize ->
            authorize
                .requestMatchers(securityProperties.getExcluded())
                .permitAll()
                .anyRequest()
                .authenticated()
        )
        .httpBasic(AbstractHttpConfigurer::disable)
        .formLogin(AbstractHttpConfigurer::disable)
        .csrf(AbstractHttpConfigurer::disable)
        .cors(configurer -> configurer.configurationSource(corsConfigurationSource()))
        .sessionManagement(configurer -> configurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

    return httpSecurity.build();
  }

  @Bean
  public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList("http://localhost:8080"));
    configuration.setAllowedMethods(Arrays.asList("OPTIONS", "GET", "POST", "PUT", "DELETE"));
    configuration.setAllowedHeaders(Arrays.asList(securityProperties.getHeader(), "Cache-Control", "Content-Type"));
    configuration.setAllowCredentials(true);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);

    return source;
  }

  @Bean
  public AuthenticationManager authenticationManager(HttpSecurity httpSecurity) throws Exception {
    AuthenticationManagerBuilder authenticationManagerBuilder = httpSecurity.getSharedObject(AuthenticationManagerBuilder.class);
    authenticationManagerBuilder.authenticationProvider(securityProvider);

    return authenticationManagerBuilder.build();
  }
}
