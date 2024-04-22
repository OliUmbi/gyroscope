package ch.oliumbi.cia.implementation.meme.dtos;

import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemeMemberDTO {

  private UUID id;
  private UUID memeId;
  private UUID memberId;
}
