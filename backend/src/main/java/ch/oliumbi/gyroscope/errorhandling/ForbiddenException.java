package ch.oliumbi.cia.errorhandling;

public class ForbiddenException extends RuntimeException {

  public ForbiddenException(String message) {
    super("Forbidden: " + message);
  }
}
