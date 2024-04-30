package ch.oliumbi.gyroscope.core.profile.dtos;

import ch.oliumbi.gyroscope.core.dtos.MetaDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDTO extends MetaDTO {
    private UUID id;
    private String name;
    private String password;
}
