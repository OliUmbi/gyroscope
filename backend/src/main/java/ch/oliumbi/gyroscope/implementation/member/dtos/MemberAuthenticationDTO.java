package ch.oliumbi.cia.implementation.member.dtos;

import ch.oliumbi.cia.enums.Role;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberAuthenticationDTO {

  private UUID id;
  private Integer number;
  private Integer year;
  private Integer semester;
  private String username;
  private Role role;
  private String token;
  private LocalDateTime expires;
}
