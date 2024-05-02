package ch.oliumbi.gyroscope.endpoints.profile;

import ch.oliumbi.gyroscope.endpoints.profile.requests.ProfileScheduleRequest;
import ch.oliumbi.gyroscope.endpoints.profile.responses.ProfileResponse;
import ch.oliumbi.gyroscope.core.profile.ProfileService;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileScheduleDTO;
import ch.oliumbi.gyroscope.core.profile.dtos.ProfileSessionDTO;
import ch.oliumbi.gyroscope.endpoints.responses.IdResponse;
import ch.oliumbi.gyroscope.endpoints.responses.MessageResponse;
import ch.oliumbi.gyroscope.security.SecurityAuthority;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Tag(name = "Profile")
@RequestMapping("/profile")
@RestController
public class ProfileController {

    private final ProfileMapper profileMapper;
    private final ProfileService profileService;

    public ProfileController(ProfileMapper profileMapper, ProfileService profileService) {
        this.profileMapper = profileMapper;
        this.profileService = profileService;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping()
    public List<ProfileResponse> load() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        List<ProfileDTO> profileDTOs = profileService.load();

        List<ProfileResponse> profileResponses = new ArrayList<>();
        for (ProfileDTO profileDTO : profileDTOs) {
            ProfileResponse profileResponse = profileMapper.map(profileDTO);

            profileResponses.add(profileResponse);
        }

        return profileResponses;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping("/schedule")
    public List<ProfileResponse> loadSchedule() {
        List<ProfileDTO> profileDTOs = profileService.load();

        List<ProfileResponse> profileResponses = new ArrayList<>();
        for (ProfileDTO profileDTO : profileDTOs) {
            ProfileResponse profileResponse = profileMapper.map(profileDTO);

            List<ProfileScheduleDTO> profileScheduleDTOs = profileService.loadSchedule(profileDTO.getId());
            for (ProfileScheduleDTO profileScheduleDTO : profileScheduleDTOs) {
                profileResponse.getSchedule().add(profileMapper.mapSchedule(profileScheduleDTO));
            }

            profileResponses.add(profileResponse);
        }

        return profileResponses;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping("/{id}")
    public ProfileResponse loadId(@PathVariable("id") UUID id) {
        // todo session handling
        ProfileDTO profileDTO = profileService.load(id);

        ProfileResponse profileResponse = profileMapper.map(profileDTO);

        List<ProfileSessionDTO> profileSessionDTOs = profileService.loadSessions(profileDTO.getId());
        for (ProfileSessionDTO profileSessionDTO : profileSessionDTOs) {
            profileResponse.getSessions().add(profileMapper.mapSession(profileSessionDTO));
        }

        List<ProfileScheduleDTO> profileScheduleDTOs = profileService.loadSchedule(profileDTO.getId());
        for (ProfileScheduleDTO profileScheduleDTO : profileScheduleDTOs) {
            profileResponse.getSchedule().add(profileMapper.mapSchedule(profileScheduleDTO));
        }

        return profileResponse;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping("/{id}/session")
    public ProfileResponse loadIdSession(@PathVariable("id") UUID id) {
        // todo session handling
        ProfileDTO profileDTO = profileService.load(id);

        ProfileResponse profileResponse = profileMapper.map(profileDTO);

        List<ProfileSessionDTO> profileSessionDTOs = profileService.loadSessions(profileDTO.getId());
        for (ProfileSessionDTO profileSessionDTO : profileSessionDTOs) {
            profileResponse.getSessions().add(profileMapper.mapSession(profileSessionDTO));
        }

        return profileResponse;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @GetMapping("/{id}/schedule")
    public ProfileResponse loadIdSchedule(@PathVariable("id") UUID id) {
        // todo session handling
        ProfileDTO profileDTO = profileService.load(id);

        ProfileResponse profileResponse = profileMapper.map(profileDTO);

        List<ProfileScheduleDTO> profileScheduleDTOs = profileService.loadSchedule(profileDTO.getId());
        for (ProfileScheduleDTO profileScheduleDTO : profileScheduleDTOs) {
            profileResponse.getSchedule().add(profileMapper.mapSchedule(profileScheduleDTO));
        }

        return profileResponse;
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @PostMapping("/schedule")
    public IdResponse createSchedule(@RequestBody ProfileScheduleRequest profileScheduleRequest) {
        UUID id = profileService.createSchedule(profileScheduleRequest.getShift());

        return new IdResponse(id);
    }

    @Secured(SecurityAuthority.AUTHENTICATED)
    @PutMapping("/schedule/{id}")
    public MessageResponse updatedSchedule(@PathVariable("id") UUID id, @RequestBody ProfileScheduleRequest profileScheduleRequest) {
        profileService.updateSchedule(id, profileScheduleRequest.getShift());

        return new MessageResponse("Successfully updated profile schedule");
    }
}
