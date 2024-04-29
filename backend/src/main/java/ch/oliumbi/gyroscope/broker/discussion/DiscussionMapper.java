package ch.oliumbi.gyroscope.broker.discussion;

import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionCommentResponse;
import ch.oliumbi.gyroscope.broker.discussion.responses.DiscussionResponse;
import ch.oliumbi.gyroscope.broker.profile.ProfileMapper;
import ch.oliumbi.gyroscope.core.discussion.DiscussionService;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class DiscussionMapper {

    private final DiscussionService discussionService;
    private final ProfileMapper profileMapper;

    public DiscussionMapper(DiscussionService discussionService, ProfileMapper profileMapper) {
        this.discussionService = discussionService;
        this.profileMapper = profileMapper;
    }

    public DiscussionResponse load(UUID id) {

        DiscussionDTO discussionDTO = discussionService.load(id);

        DiscussionResponse discussionResponse = new DiscussionResponse();
        discussionResponse.setId(discussionDTO.getId());

        List<DiscussionCommentResponse> comments = new ArrayList<>();
        for (DiscussionCommentDTO discussionCommentDTO : discussionDTO.getDiscussionCommentDTOs()) {
            DiscussionCommentResponse comment = new DiscussionCommentResponse();
            comment.setId(discussionCommentDTO.getId());
            comment.setProfile(profileMapper.load(discussionCommentDTO.getProfileId()));
            comment.setBody(discussionCommentDTO.getBody());
            comment.setCreated(discussionCommentDTO.getCreated());

            comments.add(comment);
        }
        discussionResponse.setComments(comments);

        return discussionResponse;
    }
}
