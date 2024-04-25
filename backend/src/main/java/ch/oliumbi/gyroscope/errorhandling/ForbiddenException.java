package ch.oliumbi.gyroscope.errorhandling;

public class ForbiddenException extends RuntimeException {

  public ForbiddenException(String message) {
    super("Forbidden: " + message);
  }
}
