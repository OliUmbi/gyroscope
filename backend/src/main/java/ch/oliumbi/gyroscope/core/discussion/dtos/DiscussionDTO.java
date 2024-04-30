package ch.oliumbi.gyroscope.core.discussion.dtos;

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
public class DiscussionDTO extends MetaDTO {
    private UUID id;
}
