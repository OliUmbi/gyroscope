package ch.oliumbi.gyroscope.core.discussion.dtos;

import ch.oliumbi.gyroscope.core.dtos.MetaDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
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
    private String body;
}
