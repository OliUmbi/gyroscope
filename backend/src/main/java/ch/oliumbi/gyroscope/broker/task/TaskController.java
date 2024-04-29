package ch.oliumbi.gyroscope.broker.task;

import ch.oliumbi.gyroscope.broker.requests.IdRequest;
import ch.oliumbi.gyroscope.broker.task.responses.TaskResponse;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class TaskController {

    private final TaskMapper taskMapper;

    public TaskController(TaskMapper taskMapper) {
        this.taskMapper = taskMapper;
    }

    @MessageMapping("/load/tasks")
    @SendTo("/task/loadAll")
    public List<TaskResponse> load() {
        return taskMapper.load();
    }

    @MessageMapping("/load/task")
    @SendTo("/task/loadId")
    public TaskResponse load(IdRequest idRequest) {
        return taskMapper.load(idRequest.getId());
    }
}
