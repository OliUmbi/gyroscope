package ch.oliumbi.gyroscope.errorhandling;

public class UnauthorizedException extends RuntimeException {

  public UnauthorizedException(String message) {
    super("Unauthorized: " + message);
  }
}
