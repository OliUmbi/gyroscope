package ch.oliumbi.gyroscope.broker.discussion;

import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionCommentResponse;
import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DiscussionMapper {

    public DiscussionResponse map(DiscussionDTO discussionDTO) {
        DiscussionResponse discussionResponse = new DiscussionResponse();
        discussionResponse.setId(discussionDTO.getId());
        discussionResponse.setComments(new ArrayList<>());

        return discussionResponse;
    }

    public DiscussionCommentResponse mapComment(DiscussionCommentDTO discussionCommentDTO) {
        DiscussionCommentResponse discussionCommentResponse = new DiscussionCommentResponse();
        discussionCommentResponse.setId(discussionCommentDTO.getId());
        discussionCommentResponse.setBody(discussionCommentDTO.getBody());
        discussionCommentResponse.setCreated(discussionCommentDTO.getCreated());

        return discussionCommentResponse;
    }
}
