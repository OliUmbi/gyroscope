package ch.oliumbi.gyroscope.database;

import ch.oliumbi.compass.sql.PostgreSql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Database extends PostgreSql {

    private final DatabaseProperties databaseProperties;

    public Database(DatabaseProperties databaseProperties) {
        this.databaseProperties = databaseProperties;
    }

    @Override
    public String host() {
        return databaseProperties.getHost();
    }

    @Override
    public String port() {
        return databaseProperties.getPort();
    }

    @Override
    public String database() {
        return databaseProperties.getDatabase();
    }

    @Override
    public String username() {
        return databaseProperties.getUsername();
    }

    @Override
    public String password() {
        return databaseProperties.getPassword();
    }
}
