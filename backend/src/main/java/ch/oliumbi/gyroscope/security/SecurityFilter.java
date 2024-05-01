package ch.oliumbi.gyroscope.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class SecurityFilter extends OncePerRequestFilter {
    private final AuthenticationManager authenticationManager;

    public SecurityFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = request.getHeader("name");

        if (!ObjectUtils.isEmpty(token)) {
            SecurityContext securityContext = SecurityContextHolder.getContext();
            Authentication authentication = this.authenticationManager.authenticate(new SecurityToken(token));
            securityContext.setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }
}
