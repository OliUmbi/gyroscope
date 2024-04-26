package ch.oliumbi.gyroscope.core.profile;

import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;

import java.util.UUID;

public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public ProfileDTO load(UUID id) {
        ProfileDTO profileDTO = profileRepository.load(id);
        profileDTO.setProfileSessionDTOs(profileRepository.loadSession(id));

        return profileDTO;
    }

    public ProfileDTO load(String token) {
        ProfileDTO profileDTO = profileRepository.load(token);
        profileDTO.setProfileSessionDTOs(profileRepository.loadSession(profileDTO.getId()));

        return profileDTO;
    }
}
