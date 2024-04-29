--------------------------
-- update time_modified --
--------------------------
DROP FUNCTION IF EXISTS updated_time CASCADE;
CREATE FUNCTION updated_time() RETURNS TRIGGER
    LANGUAGE plpgsql AS
$$
BEGIN
    NEW.updated
        := current_timestamp;
    RETURN NEW;
END
$$;

-----------
-- enums --
-----------
DROP TYPE IF EXISTS incident_status CASCADE;
CREATE TYPE incident_status AS ENUM ('OPEN', 'CLOSED');
CREATE CAST (varchar AS incident_status) WITH INOUT AS IMPLICIT;

DROP TYPE IF EXISTS incident_severity CASCADE;
CREATE TYPE incident_severity AS ENUM ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW');
CREATE CAST (varchar AS incident_severity) WITH INOUT AS IMPLICIT;

DROP TYPE IF EXISTS incident_type CASCADE;
CREATE TYPE incident_type AS ENUM ('ATTACK', 'ATTEMPT', 'SUSPICION');
CREATE CAST (varchar AS incident_type) WITH INOUT AS IMPLICIT;

DROP TYPE IF EXISTS profile_schedule_shift CASCADE;
CREATE TYPE profile_schedule_shift AS ENUM ('MONITORING', 'WORK', 'SLEEP', 'BREAK');
CREATE CAST (varchar AS profile_schedule_shift) WITH INOUT AS IMPLICIT;

DROP TYPE IF EXISTS task_priority CASCADE;
CREATE TYPE task_priority AS ENUM ('HIGH', 'MEDIUM', 'LOW');
CREATE CAST (varchar AS task_priority) WITH INOUT AS IMPLICIT;

DROP TYPE IF EXISTS task_status CASCADE;
CREATE TYPE task_status AS ENUM ('IDEA', 'TODO', 'ON_HOLD', 'IN_PROGRESS', 'DONE');
CREATE CAST (varchar AS task_status) WITH INOUT AS IMPLICIT;

------------
-- profile --
------------
DROP TABLE IF EXISTS profile CASCADE;
CREATE TABLE profile
(
    id       UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    name     VARCHAR(32) NOT NULL,
    password VARCHAR(64) NOT NULL,

    created  TIMESTAMP   NOT NULL             DEFAULT current_timestamp,
    updated  TIMESTAMP   NOT NULL             DEFAULT current_timestamp,
    deleted  BOOLEAN     NOT NULL             DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_updated_time ON profile CASCADE;
CREATE TRIGGER trigger_updated_time
    BEFORE UPDATE
    ON profile
    FOR EACH ROW
EXECUTE FUNCTION updated_time();

DROP TABLE IF EXISTS profile_session CASCADE;
CREATE TABLE profile_session
(
    id         UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID        NOT NULL REFERENCES profile (id),
    token      VARCHAR(32) NOT NULL,
    expires    TIMESTAMP   NOT NULL,

    created    TIMESTAMP   NOT NULL             DEFAULT current_timestamp,
    updated    TIMESTAMP   NOT NULL             DEFAULT current_timestamp,
    deleted    BOOLEAN     NOT NULL             DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_updated_time ON profile_session CASCADE;
CREATE TRIGGER trigger_updated_time
    BEFORE UPDATE
    ON profile_session
    FOR EACH ROW
EXECUTE FUNCTION updated_time();

DROP TABLE IF EXISTS profile_schedule CASCADE;
CREATE TABLE profile_schedule
(
    id             UUID                   NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id     UUID                   NOT NULL REFERENCES profile (id),
    time           TIMESTAMP              NOT NULL,
    profile_schedule_shift profile_schedule_shift NOT NULL,

    created        TIMESTAMP              NOT NULL             DEFAULT current_timestamp,
    updated        TIMESTAMP              NOT NULL             DEFAULT current_timestamp,
    deleted        BOOLEAN                NOT NULL             DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_updated_time ON profile_schedule CASCADE;
CREATE TRIGGER trigger_updated_time
    BEFORE UPDATE
    ON profile_schedule
    FOR EACH ROW
EXECUTE FUNCTION updated_time();

----------------
-- discussion --
----------------
DROP TABLE IF EXISTS discussion CASCADE;
CREATE TABLE discussion
(
    id      UUID      NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),

    created TIMESTAMP NOT NULL             DEFAULT current_timestamp,
    updated TIMESTAMP NOT NULL             DEFAULT current_timestamp,
    deleted BOOLEAN   NOT NULL             DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_updated_time ON discussion CASCADE;
CREATE TRIGGER trigger_updated_time
    BEFORE UPDATE
    ON discussion
    FOR EACH ROW
EXECUTE FUNCTION updated_time();

DROP TABLE IF EXISTS discussion_comment CASCADE;
CREATE TABLE discussion_comment
(
    id            UUID      NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    discussion_id UUID      NOT NULL REFERENCES discussion (id),
    profile_id    UUID      NOT NULL REFERENCES profile (id),
    body          TEXT      NOT NULL,

    created       TIMESTAMP NOT NULL             DEFAULT current_timestamp,
    updated       TIMESTAMP NOT NULL             DEFAULT current_timestamp,
    deleted       BOOLEAN   NOT NULL             DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_updated_time ON discussion_comment CASCADE;
CREATE TRIGGER trigger_updated_time
    BEFORE UPDATE
    ON discussion_comment
    FOR EACH ROW
EXECUTE FUNCTION updated_time();

--------------
-- incident --
--------------
DROP TABLE IF EXISTS incident CASCADE;
CREATE TABLE incident
(
    id                  UUID              NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_profile_id  UUID              NOT NULL REFERENCES profile (id),
    assignee_profile_id UUID              NULL REFERENCES profile (id),
    discussion_id       UUID              NOT NULL REFERENCES discussion (id),
    title               VARCHAR(128)      NOT NULL,
    system              VARCHAR(64)       NOT NULL,
    time                TIMESTAMP         NOT NULL,
    incident_status     incident_status   NOT NULL,
    incident_severity   incident_severity NOT NULL,
    incident_type       incident_type     NOT NULL,

    created             TIMESTAMP         NOT NULL             DEFAULT current_timestamp,
    updated             TIMESTAMP         NOT NULL             DEFAULT current_timestamp,
    deleted             BOOLEAN           NOT NULL             DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_updated_time ON incident CASCADE;
CREATE TRIGGER trigger_updated_time
    BEFORE UPDATE
    ON incident
    FOR EACH ROW
EXECUTE FUNCTION updated_time();

DROP TABLE IF EXISTS incident_check CASCADE;
CREATE TABLE incident_check
(
    id          UUID        NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    incident_id UUID        NOT NULL REFERENCES incident (id),
    value       VARCHAR(64) NOT NULL,
    checked     BOOLEAN     NOT NULL,

    created     TIMESTAMP   NOT NULL             DEFAULT current_timestamp,
    updated     TIMESTAMP   NOT NULL             DEFAULT current_timestamp,
    deleted     BOOLEAN     NOT NULL             DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_updated_time ON incident_check CASCADE;
CREATE TRIGGER trigger_updated_time
    BEFORE UPDATE
    ON incident_check
    FOR EACH ROW
EXECUTE FUNCTION updated_time();

----------
-- task --
----------
DROP TABLE IF EXISTS task CASCADE;
CREATE TABLE task
(
    id                  UUID          NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    creator_profile_id  UUID          NOT NULL REFERENCES profile (id),
    assignee_profile_id UUID          NULL REFERENCES profile (id),
    discussion_id       UUID          NOT NULL REFERENCES discussion (id),
    title               VARCHAR(128)  NOT NULL,
    task_status         task_status   NOT NULL,
    task_priority       task_priority NOT NULL,

    created             TIMESTAMP     NOT NULL             DEFAULT current_timestamp,
    updated             TIMESTAMP     NOT NULL             DEFAULT current_timestamp,
    deleted             BOOLEAN       NOT NULL             DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_updated_time ON task CASCADE;
CREATE TRIGGER trigger_updated_time
    BEFORE UPDATE
    ON task
    FOR EACH ROW
EXECUTE FUNCTION updated_time();

