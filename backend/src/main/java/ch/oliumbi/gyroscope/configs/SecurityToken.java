package ch.oliumbi.gyroscope.configs;

import ch.oliumbi.cia.implementation.member.dtos.MemberDTO;
import java.util.Collections;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;

public class SecurityToken extends AbstractAuthenticationToken {

  private final String token;
  private final MemberDTO memberDTO;

  public SecurityToken(String token, MemberDTO memberDTO) {
    super(Collections.singletonList(memberDTO.getRole()));
    this.token = token;
    this.memberDTO = memberDTO;
    setAuthenticated(true);
  }

  public SecurityToken(String token) {
    super(AuthorityUtils.NO_AUTHORITIES);
    this.token = token;
    this.memberDTO = null;
    setAuthenticated(false);
  }

  @Override
  public Object getCredentials() {
    return token;
  }

  @Override
  public Object getPrincipal() {
    return memberDTO;
  }
}
