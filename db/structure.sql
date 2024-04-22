--------------------------
-- update time_modified --
--------------------------
DROP FUNCTION IF EXISTS update_time_modified CASCADE;
CREATE FUNCTION update_time_modified() RETURNS TRIGGER LANGUAGE plpgsql AS
$$
BEGIN
    NEW.time_modified := current_timestamp;
RETURN NEW;
END
$$;

-------------
-- section --
-------------
DROP TABLE IF EXISTS section CASCADE;
CREATE TABLE section
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(32)     NOT NULL,
    year            INT             NOT NULL,
    semester        INT             NOT NULL,

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON section CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON section FOR EACH ROW EXECUTE FUNCTION update_time_modified();

------------
-- member --
------------
DROP TABLE IF EXISTS member CASCADE;
CREATE TABLE member
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    nickname        VARCHAR(32)     NOT NULL,
    firstname       VARCHAR(32)     Not NULL,
    password        VARCHAR(64)     NOT NULL,
    role_enum       VARCHAR(32)     NOT NULL,
    vibe            INT             NOT NULL,
    -- nef/potent-index

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON member CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON member FOR EACH ROW EXECUTE FUNCTION update_time_modified();

DROP TABLE IF EXISTS member_session CASCADE;
CREATE TABLE member_session
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id       UUID            NOT NULL REFERENCES member (id),
    token           VARCHAR(32)     NOT NULL,
    expires         TIMESTAMP       NOT NULL,

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON member_session CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON member_session FOR EACH ROW EXECUTE FUNCTION update_time_modified();

DROP TABLE IF EXISTS member_section CASCADE;
CREATE TABLE member_section
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id       UUID            NOT NULL REFERENCES member (id),
    section_id      UUID            NOT NULL REFERENCES section (id),
    number          INT             NOT NULL,
    rank_enum       VARCHAR(32)     NOT NULL,

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON member_section CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON member_section FOR EACH ROW EXECUTE FUNCTION update_time_modified();

---------
-- tag --
---------
DROP TABLE IF EXISTS tag CASCADE;
CREATE TABLE tag
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    label           VARCHAR(32)     NOT NULL,

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON tag CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON tag FOR EACH ROW EXECUTE FUNCTION update_time_modified();

----------
-- meme --
----------
DROP TABLE IF EXISTS meme CASCADE;
CREATE TABLE meme
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    member_id       UUID            NOT NULL REFERENCES member (id),
    mime_enum       VARCHAR(32)     NOT NULL,

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON meme CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON meme FOR EACH ROW EXECUTE FUNCTION update_time_modified();

DROP TABLE IF EXISTS meme_comment CASCADE;
CREATE TABLE meme_comment
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    meme_id         UUID            NOT NULL REFERENCES meme (id),
    member_id       UUID            NOT NULL REFERENCES member (id),
    message         VARCHAR(128)    NOT NULL,

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON meme_comment CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON meme_comment FOR EACH ROW EXECUTE FUNCTION update_time_modified();

DROP TABLE IF EXISTS meme_vote CASCADE;
CREATE TABLE meme_vote
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    meme_id         UUID            NOT NULL REFERENCES meme (id),
    member_id       UUID            NOT NULL REFERENCES member (id),
    vote_enum       VARCHAR(32)     NOT NULL,

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE,

    UNIQUE (meme_id, member_id)
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON meme_vote CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON meme_vote FOR EACH ROW EXECUTE FUNCTION update_time_modified();

-----------------
-- meme_member --
-----------------
DROP TABLE IF EXISTS meme_member CASCADE;
CREATE TABLE meme_member
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    meme_id         UUID            NOT NULL REFERENCES meme (id),
    member_id       UUID            NOT NULL REFERENCES member (id),

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE,

    UNIQUE (meme_id, member_id)
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON meme_member CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON meme_member FOR EACH ROW EXECUTE FUNCTION update_time_modified();

--------------
-- meme_tag --
--------------
DROP TABLE IF EXISTS meme_tag CASCADE;
CREATE TABLE meme_tag
(
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    meme_id         UUID            NOT NULL REFERENCES meme (id),
    tag_id          UUID            NOT NULL REFERENCES tag (id),

    time_created    TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_created  VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    time_modified   TIMESTAMP       NOT NULL    DEFAULT current_timestamp,
    member_modified VARCHAR(32)     NOT NULL    DEFAULT 'SYSTEM',
    is_deleted      BOOLEAN         NOT NULL    DEFAULT FALSE
);
DROP TRIGGER IF EXISTS trigger_update_time_modified ON meme_tag CASCADE;
CREATE TRIGGER trigger_update_time_modified BEFORE UPDATE ON meme_tag FOR EACH ROW EXECUTE FUNCTION update_time_modified();




