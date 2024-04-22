package ch.oliumbi.cia.implementation.meme;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Meme")
@RestController
public class MemeController {

  private final MemeService memeService;

  public MemeController(MemeService memeService) {
    this.memeService = memeService;
  }
}
