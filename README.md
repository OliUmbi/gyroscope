# gyroscope
TTL = the attention span of a goldfish

## build
```
mvn clean package -Pprod -q
npm run build
```

```
docker build ./database -t gyroscope-database:07
docker build ./backend -t gyroscope-backend:07
docker build ./frontend -t gyroscope-frontend:07
```

```
docker compose -f ./docker-compose.yml up -d
docker compose -f ./docker-compose.yml down
docker logs [...] 
docker exec -it [...] bash
```
