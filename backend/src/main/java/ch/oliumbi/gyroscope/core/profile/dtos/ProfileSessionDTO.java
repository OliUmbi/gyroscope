package ch.oliumbi.gyroscope.core.profile.dtos;

import ch.oliumbi.gyroscope.core.dtos.MetaDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileSessionDTO extends MetaDTO {
    private UUID id;
    private UUID profileId;
    private String token;
    private LocalDateTime expires;
}
