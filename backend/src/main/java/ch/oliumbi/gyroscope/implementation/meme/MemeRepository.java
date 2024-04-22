package ch.oliumbi.cia.implementation.meme;

import ch.oliumbi.cia.configs.Database;
import org.springframework.stereotype.Repository;

@Repository
public class MemeRepository {

  private final Database database;

  public MemeRepository(Database database) {
    this.database = database;
  }
}
