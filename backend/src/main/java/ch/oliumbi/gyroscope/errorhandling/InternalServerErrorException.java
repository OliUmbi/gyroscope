package ch.oliumbi.gyroscope.errorhandling;

public class InternalServerErrorException extends RuntimeException {

  public InternalServerErrorException(String message) {
    super("Internal server error: " + message);
  }
}
