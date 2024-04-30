package ch.oliumbi.gyroscope.core.profile;

import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileScheduleDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
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

    public List<ProfileDTO> load() {
        return profileRepository.load();
    }

    public ProfileDTO load(UUID id) {
        return profileRepository.load(id);
    }

    public List<ProfileSessionDTO> loadSessions(UUID profileId) {
        return profileRepository.loadSession(profileId);
    }

    public List<ProfileScheduleDTO> loadSchedule(UUID profileId) {
        return profileRepository.loadSchedule(profileId);
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
