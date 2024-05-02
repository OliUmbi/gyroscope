package ch.oliumbi.gyroscope.endpoints.discussion.requests;

import ch.oliumbi.gyroscope.core.dtos.MetaDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DiscussionCommentRequest extends MetaDTO {
    private UUID discussionId;
    private String body;
}
