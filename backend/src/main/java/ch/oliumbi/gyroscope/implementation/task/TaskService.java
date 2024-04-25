package ch.oliumbi.gyroscope.implementation.task;

import ch.oliumbi.gyroscope.implementation.task.dtos.TaskDTO;
import ch.oliumbi.gyroscope.implementation.task.enums.TaskPriority;
import ch.oliumbi.gyroscope.implementation.task.enums.TaskStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<TaskDTO> load() {

        return taskRepository.load();
    }

    public TaskDTO load(UUID id) {

        return taskRepository.load(id);
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

        taskRepository.create(taskDTO);

        return id;
    }

    public void update(UUID id, UUID assigneeProfileId, String title, TaskStatus taskStatus, TaskPriority taskPriority) {
        TaskDTO taskDTO = new TaskDTO();
        taskDTO.setId(id);
        taskDTO.setAssigneeProfileId(assigneeProfileId);
        taskDTO.setTitle(title);
        taskDTO.setTaskStatus(taskStatus);
        taskDTO.setTaskPriority(taskPriority);

        taskRepository.update(taskDTO);
    }

    public void delete(UUID id) {
        taskRepository.delete(id);
    }
}
