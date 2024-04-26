package ch.oliumbi.gyroscope.core.discussion;

import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.core.discussion.dtos.DiscussionDTO;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class DiscussionService {

    private DiscussionRepository discussionRepository;

    public DiscussionService(DiscussionRepository discussionRepository) {
        this.discussionRepository = discussionRepository;
    }

    public DiscussionDTO load(UUID id) {
        DiscussionDTO discussionDTO = discussionRepository.load(id);
        discussionDTO.setDiscussionCommentDTOs(discussionRepository.loadComment(id));

        return discussionDTO;
    }

    public UUID create() {
        UUID id = UUID.randomUUID();

        DiscussionDTO discussionDTO = new DiscussionDTO();
        discussionDTO.setId(id);

        discussionRepository.create(discussionDTO);

        return id;
    }

    public UUID createComment(UUID discussionId, UUID profileId, String body) {
        UUID id = UUID.randomUUID();

        DiscussionCommentDTO discussionCommentDTO = new DiscussionCommentDTO();
        discussionCommentDTO.setId(id);
        discussionCommentDTO.setDiscussionId(discussionId);
        discussionCommentDTO.setProfileId(profileId);
        discussionCommentDTO.setBody(body);

        discussionRepository.createComment(discussionCommentDTO);

        return id;
    }
}
