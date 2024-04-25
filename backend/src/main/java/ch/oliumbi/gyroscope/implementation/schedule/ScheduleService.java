package ch.oliumbi.gyroscope.implementation.schedule;

import ch.oliumbi.gyroscope.implementation.task.dtos.TaskDTO;
import ch.oliumbi.gyroscope.implementation.task.enums.TaskPriority;
import ch.oliumbi.gyroscope.implementation.task.enums.TaskStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ScheduleService {

    private final ScheduleRepository scheduleRepository;

    public ScheduleService(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    public List<TaskDTO> load() {

        return scheduleRepository.load();
    }

    public TaskDTO load(UUID id) {

        return scheduleRepository.load(id);
    }

    public UUID create(UUID creatorProfileId, UUID assigneeProfileId, UUID discussionId, String title, TaskStatus taskStatus, TaskPriority taskPriority) {
        UUID id = UUID.randomUUID();

        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setId(id);
        taskDTO.setCreatorProfileId(creatorProfileId);
        taskDTO.setAssigneeProfileId(assigneeProfileId);
        taskDTO.setDiscussionId(discussionId);
        taskDTO.setTitle(title);
        taskDTO.setTaskStatus(taskStatus);
        taskDTO.setTaskPriority(taskPriority);

        scheduleRepository.create(taskDTO);

        return id;
    }

    public void update(UUID id, UUID assigneeProfileId, String title, TaskStatus taskStatus, TaskPriority taskPriority) {
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setId(id);
        taskDTO.setAssigneeProfileId(assigneeProfileId);
        taskDTO.setTitle(title);
        taskDTO.setTaskStatus(taskStatus);
        taskDTO.setTaskPriority(taskPriority);

        scheduleRepository.update(taskDTO);
    }

    public void delete(UUID id) {
        scheduleRepository.delete(id);
    }
}
