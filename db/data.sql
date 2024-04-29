TRUNCATE TABLE profile CASCADE;
INSERT INTO profile(id, name, password)
VALUES ('aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'Minder', ''),
       ('aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'Smith', ''),
       ('aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'Loosli', ''),
       ('aaaaaaa1-bbb4-cccc-dddd-eeeeeeeeeeee', 'Umbricht', ''),
       ('aaaaaaa1-bbb5-cccc-dddd-eeeeeeeeeeee', 'Besseau', ''),
       ('aaaaaaa1-bbb6-cccc-dddd-eeeeeeeeeeee', 'Leutenegger', ''),
       ('aaaaaaa1-bbb7-cccc-dddd-eeeeeeeeeeee', 'Feigenwinter', ''),
       ('aaaaaaa1-bbb8-cccc-dddd-eeeeeeeeeeee', 'Schnellmann', ''),
       ('aaaaaaa1-bbb9-cccc-dddd-eeeeeeeeeeee', 'Saint Girons', ''),
       ('aaaaaaa1-bb10-cccc-dddd-eeeeeeeeeeee', 'Velez de Villa', ''),
       ('aaaaaaa1-bb11-cccc-dddd-eeeeeeeeeeee', 'Kondracki', ''),
       ('aaaaaaa1-bb12-cccc-dddd-eeeeeeeeeeee', 'Goudsmit', '');

TRUNCATE TABLE profile_session CASCADE;
INSERT INTO profile_session(id, profile_id, token, expires)
VALUES ('aaaaaaa2-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token1234', current_timestamp),
       ('aaaaaaa2-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'token1234', current_timestamp),
       ('aaaaaaa2-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'token1234', current_timestamp),
       ('aaaaaaa2-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'token1234', current_timestamp),
       ('aaaaaaa2-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'token1234', current_timestamp);

TRUNCATE TABLE discussion CASCADE;
INSERT INTO discussion(id)
VALUES ('aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee'),
       ('aaaaaaa3-bbb2-cccc-dddd-eeeeeeeeeeee'),
       ('aaaaaaa3-bbb3-cccc-dddd-eeeeeeeeeeee'),
       ('aaaaaaa3-bbb4-cccc-dddd-eeeeeeeeeeee'),
       ('aaaaaaa3-bbb5-cccc-dddd-eeeeeeeeeeee'),
       ('aaaaaaa3-bbb6-cccc-dddd-eeeeeeeeeeee');

TRUNCATE TABLE discussion_comment CASCADE;
INSERT INTO discussion_comment(id, discussion_id, profile_id, body)
VALUES ('aaaaaaa4-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum dolor sit amet tellus posuere ornare. '),
       ('aaaaaaa4-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee',
        'Nulla quam lacus, suscipit et odio eget, congue efficitur tortor. Maecenas aliquet arcu vitae purus tristique, sollicitudin sagittis felis semper. Suspendisse convallis suscipit leo vel sodales.'),
       ('aaaaaaa4-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee',
        'Suspendisse ultrices ultrices justo ut maximus.'),
       ('aaaaaaa4-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb4-cccc-dddd-eeeeeeeeeeee',
        'Nullam gravida ut sapien sit amet varius. Donec sit amet ultricies purus. Mauris placerat turpis nec massa accumsan luctus. Nunc eget orci ut mi maximus placerat id vulputate massa. Integer eu augue eu est tempor consequat. Etiam sed nulla arcu.'),
       ('aaaaaaa4-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb5-cccc-dddd-eeeeeeeeeeee',
        'Vivamus lacus lacus, eleifend et imperdiet vel, aliquam ut mauris. Sed in elit vitae risus congue vehicula. Quisque tempor, nulla vel elementum venenatis, nisl sapien posuere tortor, a viverra mi leo non massa. '),
       ('aaaaaaa4-bbb6-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb6-cccc-dddd-eeeeeeeeeeee',
        'Aliquam erat volutpat. Morbi ornare sodales est, vitae scelerisque quam ullamcorper elementum. Cras facilisis felis eget pellentesque fringilla. Donec tristique dui a pulvinar consectetur. '),
       ('aaaaaaa4-bbb7-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb7-cccc-dddd-eeeeeeeeeeee',
        'Ut diam mi, accumsan quis nunc non, elementum scelerisque libero.'),
       ('aaaaaaa4-bbb8-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb8-cccc-dddd-eeeeeeeeeeee',
        'Proin tincidunt neque ut aliquam fermentum. '),
       ('aaaaaaa4-bbb9-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb9-cccc-dddd-eeeeeeeeeeee',
        'Vivamus turpis dolor, dapibus quis augue volutpat, suscipit porta felis. '),
       ('aaaaaaa4-bb10-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bb10-cccc-dddd-eeeeeeeeeeee',
        'Maecenas non erat dolor. Vivamus vulputate nulla vitae auctor porta. Etiam vel risus non lorem varius fringilla. Nullam sagittis quis ex sit amet placerat. Donec laoreet tortor sit amet egestas varius.'),
       ('aaaaaaa4-bb11-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bb11-cccc-dddd-eeeeeeeeeeee',
        'Cras id neque elementum, porttitor mi id, placerat ipsum. Praesent mollis dui est, id ornare lorem mollis sit amet.'),
       ('aaaaaaa4-bb12-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bb12-cccc-dddd-eeeeeeeeeeee',
        'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'),
       ('aaaaaaa4-bb13-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa3-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee',
        'Nunc luctus dolor nec urna pretium iaculis et eget dolor. Nulla aliquam vehicula nisl, ut commodo eros pellentesque at. Duis ut nunc vitae felis pulvinar accumsan vitae sed felis. ');

TRUNCATE TABLE incident CASCADE;
INSERT INTO incident(id, creator_profile_id, assignee_profile_id, discussion_id, title, system, time, incident_status, incident_severity, incident_type)
VALUES ('aaaaaaa5-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb5-cccc-dddd-eeeeeeeeeeee',
        'aaaaaaa3-bbb1-cccc-dddd-eeeeeeeeeeee', 'Incident ABC on service XYZ', 'XYZ', current_timestamp, 'OPEN', 'HIGH', 'ATTACK'),
       ('aaaaaaa5-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb6-cccc-dddd-eeeeeeeeeeee',
        'aaaaaaa3-bbb2-cccc-dddd-eeeeeeeeeeee', 'Incident ABC on service XYZ', 'XYZ', current_timestamp, 'OPEN', 'HIGH', 'ATTACK'),
       ('aaaaaaa5-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb7-cccc-dddd-eeeeeeeeeeee',
        'aaaaaaa3-bbb3-cccc-dddd-eeeeeeeeeeee', 'Incident ABC on service XYZ', 'XYZ', current_timestamp, 'OPEN', 'HIGH', 'ATTACK'),
       ('aaaaaaa5-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa1-bbb8-cccc-dddd-eeeeeeeeeeee',
        'aaaaaaa3-bbb4-cccc-dddd-eeeeeeeeeeee', 'Incident ABC on service XYZ', 'XYZ', current_timestamp, 'OPEN', 'HIGH', 'ATTACK');

TRUNCATE TABLE incident_check CASCADE;
INSERT INTO incident_check(id, incident_id, value, checked)
VALUES ('aaaaaaa6-bbb1-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb1-cccc-dddd-eeeeeeeeeeee', 'Vivamus ipsum tellus, facilisis eu nibh sit amet.', false),
       ('aaaaaaa6-bbb2-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb1-cccc-dddd-eeeeeeeeeeee', 'feugiat ullamcorper ipsum.', false),
       ('aaaaaaa6-bbb3-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb1-cccc-dddd-eeeeeeeeeeee', 'Nullam semper quis metus et congue.', false),
       ('aaaaaaa6-bbb4-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb1-cccc-dddd-eeeeeeeeeeee', 'Vestibulum sed faucibus ', false),
       ('aaaaaaa6-bbb5-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb2-cccc-dddd-eeeeeeeeeeee', 'Proin sed ex vitae erat faucibus lacinia.', false),
       ('aaaaaaa6-bbb6-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb2-cccc-dddd-eeeeeeeeeeee', 'Proin vehicula libero', false),
       ('aaaaaaa6-bbb7-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb2-cccc-dddd-eeeeeeeeeeee', 'at neque pretium bibendum.', false),
       ('aaaaaaa6-bbb8-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb3-cccc-dddd-eeeeeeeeeeee', 'Sed eget nisi luctus', false),
       ('aaaaaaa6-bbb9-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb3-cccc-dddd-eeeeeeeeeeee', 'sodales velit ultrices, ornare quam.', false),
       ('aaaaaaa6-bb10-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb4-cccc-dddd-eeeeeeeeeeee', 'Aliquam ac lectus diam. ', false),
       ('aaaaaaa6-bb11-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb4-cccc-dddd-eeeeeeeeeeee', 'Proin et condimentum odio', false),
       ('aaaaaaa6-bb12-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb4-cccc-dddd-eeeeeeeeeeee', 'vel sollicitudin tellus. ', false),
       ('aaaaaaa6-bb13-cccc-dddd-eeeeeeeeeeee', 'aaaaaaa5-bbb4-cccc-dddd-eeeeeeeeeeee', 'Fusce velit ligula', false);

