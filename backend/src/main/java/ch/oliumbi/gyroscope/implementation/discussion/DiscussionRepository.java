package ch.oliumbi.gyroscope.implementation.discussion;

import ch.oliumbi.compass.sql.input.Input;
import ch.oliumbi.gyroscope.configs.Database;
import ch.oliumbi.gyroscope.errorhandling.InternalServerErrorException;
import ch.oliumbi.gyroscope.errorhandling.NotFoundException;
import ch.oliumbi.gyroscope.implementation.discussion.dtos.DiscussionCommentDTO;
import ch.oliumbi.gyroscope.implementation.discussion.dtos.DiscussionDTO;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class DiscussionRepository {

    private Database database;

    public DiscussionRepository(Database database) {
        this.database = database;
    }

    public DiscussionDTO load(UUID id) {
        return database.querySingle("""
                                SELECT  id,
                                        created,
                                        updated
                                FROM    discussion
                                WHERE   deleted = FALSE
                                AND     id = :id
                                INTO    id,
                                        created,
                                        updated
                                """,
                        DiscussionDTO.class,
                        new Input("id", id))
                .orElseThrow(() -> new InternalServerErrorException("failed to load discussion with id: " + id));
    }

    public List<DiscussionCommentDTO> loadComment(UUID discussionId) {
        return database.query("""
                                SELECT  id,
                                        discussion_id,
                                        profile_id,
                                        body,
                                        created,
                                        updated
                                FROM    discussion_comment
                                WHERE   deleted = FALSE
                                AND     discussion_id = :discussionId
                                ORDER BY created
                                INTO    id,
                                        discussionId,
                                        profileId,
                                        body,
                                        created,
                                        updated
                                """,
                        DiscussionCommentDTO.class,
                        new Input("discussionId", discussionId))
                .orElseThrow(() -> new InternalServerErrorException("failed to load discussion comment with discussion id: " + discussionId));
    }

    public void create(DiscussionDTO discussionDTO) {
        database.update("""
                                INSERT INTO discussion (
                                        id)
                                VALUES (
                                        :id)
                                """,
                        discussionDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to create discussion"));
    }

    public void createComment(DiscussionCommentDTO discussionCommentDTO) {
        database.update("""
                                INSERT INTO discussion_comment (
                                        id,
                                        discussion_id,
                                        profile_id,
                                        body)
                                VALUES (
                                        :id,
                                        :discussionId,
                                        :profileId,
                                        :body)
                                """,
                        discussionCommentDTO)
                .orElseThrow(() -> new InternalServerErrorException("failed to create discussion comment"));

    }
}
