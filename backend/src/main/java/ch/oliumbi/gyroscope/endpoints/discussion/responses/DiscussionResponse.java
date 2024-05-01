package ch.oliumbi.gyroscope.endpoints.discussion.responses;

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
public class DiscussionResponse {
    private UUID id;
    private List<DiscussionCommentResponse> comments;
}
