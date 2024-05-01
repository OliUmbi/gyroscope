package ch.oliumbi.gyroscope.docs;

import ch.oliumbi.gyroscope.security.SecurityProperties;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.security.SecurityScheme.In;
import io.swagger.v3.oas.models.security.SecurityScheme.Type;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DocsConfig {

    private final SecurityProperties securityProperties;

    public DocsConfig(SecurityProperties securityProperties) {
        this.securityProperties = securityProperties;
    }

    @Bean
    public OpenAPI openAPI() {
        Info info = new Info();
        info.title("Gyroscope");

        SecurityRequirement securityRequirement = new SecurityRequirement();
        securityRequirement.addList(securityProperties.getHeader());

        SecurityScheme securityScheme = new SecurityScheme();
        securityScheme.name(securityProperties.getHeader());
        securityScheme.type(Type.APIKEY);
        securityScheme.in(In.HEADER);

        Components components = new Components();
        components.addSecuritySchemes(securityProperties.getHeader(), securityScheme);

        return new OpenAPI()
                .addSecurityItem(securityRequirement)
                .components(components)
                .info(info);
    }
}
