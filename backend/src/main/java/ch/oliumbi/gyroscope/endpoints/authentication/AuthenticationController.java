package ch.oliumbi.gyroscope.endpoints.authentication;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Authentication")
@RequestMapping("/authentication")
@RestController
public class AuthenticationController {

    @PostMapping("/login")
    public String login(String message) throws InterruptedException {
        System.out.println("server");
        System.out.println(message);
        Thread.sleep(1000);
        return "{\"message\": \"test\"}";
    }
}
