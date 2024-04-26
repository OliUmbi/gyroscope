package ch.oliumbi.gyroscope.core.profile;

import ch.oliumbi.compass.sql.input.Input;
import ch.oliumbi.gyroscope.database.Database;
import ch.oliumbi.gyroscope.errorhandling.InternalServerErrorException;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class ProfileRepository {

    private final Database database;

    public ProfileRepository(Database database) {
        this.database = database;
    }

    public ProfileDTO load(UUID id) {
        return database.querySingle("""
                                SELECT  id,
                                        name,
                                        password,
                                        created,
                                        updated
                                FROM    profile
                                WHERE   deleted = FALSE
                                AND     id = :id
                                INTO    id,
                                        name,
                                        password,
                                        created,
                                        updated
                                """,
                        ProfileDTO.class,
                        new Input("id", id))
                .orElseThrow(() -> new InternalServerErrorException("failed to load profile with id: " + id));
    }

    public ProfileDTO load(String token) {
        return database.querySingle("""
                                SELECT  p.id,
                                        p.name,
                                        p.password,
                                        p.created,
                                        p.updated
                                FROM    profile p
                                INNER JOIN profile_session ps ON p.id = ps.profile_id
                                WHERE   p.deleted = FALSE
                                AND     ps.deleted = FALSE
                                AND     ps.token = :token
                                AND     ps.expires > current_timestamp
                                INTO    id,
                                        name,
                                        password,
                                        created,
                                        updated
                                """,
                        ProfileDTO.class,
                        new Input("token", token))
                .orElseThrow(() -> new InternalServerErrorException("failed to load profile with token"));
    }

    public List<ProfileSessionDTO> loadSession(UUID profileId) {
        return database.query("""
                                SELECT  id,
                                        profile_id,
                                        token,
                                        expires,
                                        created,
                                        updated
                                FROM    profile_session
                                WHERE   deleted = FALSE
                                AND     profile_id = :profileId
                                ORDER BY created
                                INTO    id,
                                        profileId,
                                        token,
                                        expires,
                                        created,
                                        updated
                                """,
                        ProfileSessionDTO.class,
                        new Input("profileId", profileId))
                .orElseThrow(() -> new InternalServerErrorException("failed to load profile session with profile id: " + profileId));
    }

}
