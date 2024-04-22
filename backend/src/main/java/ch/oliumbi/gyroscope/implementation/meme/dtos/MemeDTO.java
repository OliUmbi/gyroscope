package ch.oliumbi.cia.implementation.meme.dtos;

import ch.oliumbi.cia.enums.Mime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemeDTO {

  private UUID id;
  private UUID memberId;
  private String name;
  private String description;
  private Mime mime;
}
