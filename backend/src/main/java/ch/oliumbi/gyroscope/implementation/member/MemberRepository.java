package ch.oliumbi.cia.implementation.member;

import ch.oliumbi.cia.configs.Database;
import ch.oliumbi.cia.errorhandling.NotFoundException;
import ch.oliumbi.cia.implementation.member.dtos.MemberDTO;
import ch.oliumbi.compass.sql.input.Input;
import org.springframework.stereotype.Repository;

@Repository
public class MemberRepository {

  private final Database database;

  public MemberRepository(Database database) {
    this.database = database;
  }

  public MemberDTO loadByUsername(String username) {
    return database.querySingle("""
        SELECT  id,
                number
                year,
        """,
        MemberDTO.class,
        new Input("username", username))
        .orElseThrow(() -> new NotFoundException("member not found by username"));
  }
}
