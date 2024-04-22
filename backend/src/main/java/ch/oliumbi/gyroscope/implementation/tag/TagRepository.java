package ch.oliumbi.cia.implementation.tag;

import ch.oliumbi.cia.configs.Database;
import org.springframework.stereotype.Repository;

@Repository
public class TagRepository {

  private final Database database;

  public TagRepository(Database database) {
    this.database = database;
  }
}
