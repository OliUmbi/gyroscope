package ch.oliumbi.gyroscope.broker.authentication;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class AuthenticationController {

    @MessageMapping("/action/login")
    @SendTo("/authentication/success")
    public String login(String message) throws InterruptedException {
        System.out.println("server");
        System.out.println(message);
        Thread.sleep(1000);
        return "{\"message\": \"test\"}";
    }
}
