package ch.oliumbi.cia.implementation.member.dtos;

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
public class MemberSessionDTO {

  private UUID id;
  private UUID memberId;
  private String token;
  private LocalDateTime expires;
}
