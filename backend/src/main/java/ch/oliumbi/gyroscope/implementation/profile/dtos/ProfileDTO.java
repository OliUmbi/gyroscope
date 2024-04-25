package ch.oliumbi.gyroscope.implementation.profile.dtos;

import ch.oliumbi.gyroscope.dtos.MetaDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
