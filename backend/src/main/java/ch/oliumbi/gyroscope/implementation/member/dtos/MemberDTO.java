package ch.oliumbi.cia.implementation.member.dtos;

import ch.oliumbi.cia.enums.Role;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberDTO {

  private UUID id;
  private Integer number;
  private Integer year;
  private Integer semester;
  private String username;
  private String password;
  private Role role;
  private Boolean contributor;
}
