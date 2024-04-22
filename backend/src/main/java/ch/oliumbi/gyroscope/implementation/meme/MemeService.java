package ch.oliumbi.cia.implementation.meme;

import org.springframework.stereotype.Service;

@Service
public class MemeService {

  private final MemeRepository memeRepository;

  public MemeService(MemeRepository memeRepository) {
    this.memeRepository = memeRepository;
  }
}
