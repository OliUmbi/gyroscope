FROM openjdk:22 AS backend
WORKDIR /backend
COPY /target/gyroscope.jar /backend/gyroscope.jar
ENTRYPOINT ["java","-jar","/backend/gyroscope.jar"]
