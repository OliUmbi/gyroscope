package ch.oliumbi.gyroscope.implementation.discussion.dtos;

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
public class DiscussionCommentDTO extends MetaDTO {
    private UUID id;
    private UUID discussionId;
    private UUID profileId;
    private UUID body;
}
