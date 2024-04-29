package ch.oliumbi.gyroscope.core.profile;

import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileScheduleDTO;
import ch.oliumbi.gyroscope.core.profile.enums.ProfileScheduleShift;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public ProfileDTO load(String token) {
        ProfileDTO profileDTO = profileRepository.load(token);
        profileDTO.setProfileSessionDTOs(profileRepository.loadSession(profileDTO.getId()));

        return profileDTO;
    }

    public ProfileDTO load(UUID id) {
        return profileRepository.load(id);
    }

    public ProfileDTO loadSession(UUID id) {
        ProfileDTO profileDTO = profileRepository.load(id);
        profileDTO.setProfileSessionDTOs(profileRepository.loadSession(id));

        return profileDTO;
    }

    public ProfileDTO loadSchedule(UUID id) {
        ProfileDTO profileDTO = profileRepository.load(id);
        profileDTO.setProfileScheduleDTOs(profileRepository.loadSchedule(profileDTO.getId()));

        return profileDTO;
    }

    public List<ProfileDTO> loadSchedule() {
        List<ProfileDTO> profileDTOs = profileRepository.load();

        for (ProfileDTO profileDTO : profileDTOs) {
            profileDTO.setProfileScheduleDTOs(profileRepository.loadScheduleTimeline(profileDTO.getId()));
        }

        return profileDTOs;
    }

    public List<ProfileDTO> loadScheduleDashboard() {
        List<ProfileDTO> profileDTOs = profileRepository.load();

        for (ProfileDTO profileDTO : profileDTOs) {
            profileDTO.setProfileScheduleDTOs(profileRepository.loadScheduleDashboard(profileDTO.getId()));
        }

        return profileDTOs;
    }

    public UUID createSchedule(ProfileScheduleShift profileScheduleShift) {
        UUID id = UUID.randomUUID();

        ProfileScheduleDTO profileScheduleDTO = new ProfileScheduleDTO();
        profileScheduleDTO.setId(id);
        profileScheduleDTO.setProfileId(UUID.fromString("aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee"));
        profileScheduleDTO.setTime(nextTime(UUID.fromString("aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee")));
        profileScheduleDTO.setProfileScheduleShift(profileScheduleShift);

        profileRepository.createSchedule(profileScheduleDTO);

        return id;
    }

    public void updateSchedule(UUID id, ProfileScheduleShift profileScheduleShift) {
        ProfileScheduleDTO profileScheduleDTO = new ProfileScheduleDTO();
        profileScheduleDTO.setId(id);
        profileScheduleDTO.setProfileScheduleShift(profileScheduleShift);

        profileRepository.updateSchedule(profileScheduleDTO);
    }

    private LocalDateTime nextTime(UUID profileId) {
        return LocalDateTime.now();
    }
}
