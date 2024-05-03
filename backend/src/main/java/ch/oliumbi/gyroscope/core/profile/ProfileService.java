package ch.oliumbi.gyroscope.core.profile;

import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileScheduleDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
import ch.oliumbi.gyroscope.core.profile.enums.ProfileScheduleShift;
import ch.oliumbi.gyroscope.endpoints.Session;
import ch.oliumbi.gyroscope.errorhandling.UnauthorizedException;
import ch.oliumbi.gyroscope.security.SecurityProperties;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final SecurityProperties securityProperties;

    public ProfileService(ProfileRepository profileRepository, SecurityProperties securityProperties) {
        this.profileRepository = profileRepository;
        this.securityProperties = securityProperties;
    }

    public ProfileSessionDTO login(String name, String password) {
        UUID id = UUID.randomUUID();

        ProfileDTO profileDTO = profileRepository.loadByName(name);

        if (!securityProperties.getPasswordEncoder().matches(password, profileDTO.getPassword())) {
            throw new UnauthorizedException("invalid credentials");
        }

        ProfileSessionDTO profileSessionDTO = new ProfileSessionDTO();
        profileSessionDTO.setId(id);
        profileSessionDTO.setProfileId(profileDTO.getId());
        profileSessionDTO.setToken(RandomStringUtils.randomAlphanumeric(32));
        profileSessionDTO.setExpires(LocalDateTime.now().plusHours(securityProperties.getExpirationInHours()));

        profileRepository.createSession(profileSessionDTO);

        return profileSessionDTO;
    }

    public List<ProfileDTO> load() {
        return profileRepository.loadByToken();
    }

    public ProfileDTO load(UUID id) {
        return profileRepository.loadByToken(id);
    }

    public ProfileDTO load(String token) {
        return profileRepository.loadByToken(token);
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
        profileScheduleDTO.setProfileId(Session.currentId());
        profileScheduleDTO.setTime(nextTime(Session.currentId()));
        profileScheduleDTO.setProfileScheduleShift(profileScheduleShift);

        profileRepository.createSchedule(profileScheduleDTO);

        return id;
    }

    public void updateSchedule(UUID id, ProfileScheduleShift profileScheduleShift) {
        ProfileScheduleDTO profileScheduleDTO = new ProfileScheduleDTO();
        profileScheduleDTO.setId(id);
        profileScheduleDTO.setProfileId(Session.currentId());
        profileScheduleDTO.setProfileScheduleShift(profileScheduleShift);

        profileRepository.updateSchedule(profileScheduleDTO);
    }

    private LocalDateTime nextTime(UUID profileId) {
        List<ProfileScheduleDTO> profileScheduleDTOs = profileRepository.loadScheduleLast(profileId);

        if (profileScheduleDTOs.isEmpty()) {
            return LocalDateTime.now().withMinute(0).withSecond(0).withNano(0);
        }

        return profileScheduleDTOs.getFirst().getTime().withMinute(0).withSecond(0).withNano(0).plusHours(1);
    }
}
