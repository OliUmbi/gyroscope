package ch.oliumbi.gyroscope.endpoints.profile.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileSessionResponse {
    private UUID id;
    private LocalDateTime expires;
    private LocalDateTime created;
}
