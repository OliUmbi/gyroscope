FROM postgres AS database
COPY 01-structure.sql /docker-entrypoint-initdb.d/
COPY 02-data.sql /docker-entrypoint-initdb.d/
