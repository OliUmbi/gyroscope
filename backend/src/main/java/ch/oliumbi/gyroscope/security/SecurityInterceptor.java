package ch.oliumbi.gyroscope.security;

import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import java.security.Principal;

@Component
public class SecurityInterceptor implements ChannelInterceptor {

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor stompHeaderAccessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);

        if (stompHeaderAccessor != null && StompCommand.CONNECT.equals(stompHeaderAccessor.getCommand())) {
            String name = stompHeaderAccessor.getFirstNativeHeader("name");
            String password = stompHeaderAccessor.getFirstNativeHeader("password");

            stompHeaderAccessor.setUser(new UsernamePasswordAuthenticationToken(name, null, AuthorityUtils.createAuthorityList("LOGGED_IN")));
        }

        return ChannelInterceptor.super.preSend(message, channel);
    }
}
