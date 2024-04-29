package ch.oliumbi.gyroscope.errorhandling;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import ch.oliumbi.gyroscope.broker.responses.ErrorResponses;

@ControllerAdvice
public class ExceptionHandling {

  private static final Logger LOG = LoggerFactory.getLogger(ExceptionHandling.class);

  @ResponseBody
  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ErrorResponses exceptionHandler(Exception exception) {
    LOG.error(exception.getMessage(), exception);
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(InternalServerErrorException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ErrorResponses exceptionHandler(InternalServerErrorException exception) {
    LOG.error(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(BadCredentialsException.class)
  @ResponseStatus(HttpStatus.UNAUTHORIZED)
  public ErrorResponses exceptionHandler(BadCredentialsException exception) {
    LOG.warn(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(UnauthorizedException.class)
  @ResponseStatus(HttpStatus.UNAUTHORIZED)
  public ErrorResponses exceptionHandler(UnauthorizedException exception) {
    LOG.warn(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(InsufficientAuthenticationException.class)
  @ResponseStatus(HttpStatus.FORBIDDEN)
  public ErrorResponses exceptionHandler(InsufficientAuthenticationException exception) {
    LOG.warn(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(AccessDeniedException.class)
  @ResponseStatus(HttpStatus.FORBIDDEN)
  public ErrorResponses exceptionHandler(AccessDeniedException exception) {
    LOG.warn(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(ForbiddenException.class)
  @ResponseStatus(HttpStatus.FORBIDDEN)
  public ErrorResponses exceptionHandler(ForbiddenException exception) {
    LOG.warn(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(BadRequestException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ErrorResponses exceptionHandler(BadRequestException exception) {
    LOG.info(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(ServletRequestBindingException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ErrorResponses exceptionHandler(ServletRequestBindingException exception) {
    LOG.info(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }

  @ResponseBody
  @ExceptionHandler(NotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public ErrorResponses exceptionHandler(NotFoundException exception) {
    LOG.info(exception.getMessage());
    return new ErrorResponses(exception.getMessage());
  }
}
