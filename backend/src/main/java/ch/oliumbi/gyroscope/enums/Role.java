package ch.oliumbi.cia.enums;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
  MEMBER,
  ADMINISTRATOR;

  @Override
  public String getAuthority() {
    return this.name();
  }

  public static class Permission {

    public final static String MEMBER = "MEMBER";
  }
}
