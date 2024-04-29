package ch.oliumbi.gyroscope.broker.discussion.responses;

import ch.oliumbi.gyroscope.broker.profile.responses.ProfileResponse;
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
public class DiscussionCommentResponse {
    private UUID id;
    private String body;
    private ProfileResponse profile;
    private LocalDateTime created;
}
