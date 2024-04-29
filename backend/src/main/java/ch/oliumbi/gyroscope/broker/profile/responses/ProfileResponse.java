package ch.oliumbi.gyroscope.broker.profile.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileResponse {
    private UUID id;
    private String name;
    private List<ProfileSessionResponse> sessions;
}
