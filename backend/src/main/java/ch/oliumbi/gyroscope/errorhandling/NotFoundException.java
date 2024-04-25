package ch.oliumbi.gyroscope.errorhandling;

public class NotFoundException extends RuntimeException {

  public NotFoundException(String message) {
    super("Not found: " + message);
  }
}
