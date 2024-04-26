package ch.oliumbi.gyroscope.core.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MetaDTO {
    private LocalDateTime created;
    private LocalDateTime updated;
    private Boolean deleted;
}
