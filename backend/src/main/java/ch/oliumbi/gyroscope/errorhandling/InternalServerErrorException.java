package ch.oliumbi.cia.errorhandling;

public class InternalServerErrorException extends RuntimeException {

  public InternalServerErrorException(String message) {
    super("Internal server error: " + message);
  }
}
