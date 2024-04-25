package ch.oliumbi.gyroscope.configs;

import ch.oliumbi.cia.implementation.member.MemberService;
import ch.oliumbi.cia.implementation.member.dtos.MemberDTO;
import ch.oliumbi.cia.errorhandling.NotFoundException;
import ch.oliumbi.cia.errorhandling.UnauthorizedException;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
public class SecurityProvider implements AuthenticationProvider {

  private final MemberService memberService;

  public SecurityProvider(MemberService memberService) {
    this.memberService = memberService;
  }

  @Override
  public Authentication authenticate(Authentication authentication) throws AuthenticationException {
    String token = (String) authentication.getCredentials();

    try {
      MemberDTO memberDTO = memberService.load(token);
      return new SecurityToken(token, memberDTO);
    } catch (NotFoundException ignored) {
      throw new UnauthorizedException("member not found");
    }
  }

  @Override
  public boolean supports(Class<?> authentication) {
    return SecurityToken.class.isAssignableFrom(authentication);
  }
}
