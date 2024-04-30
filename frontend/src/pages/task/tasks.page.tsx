import TaskBoard from "../../components/complex/task/board/task-board.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import {TaskResponse} from "../../responses/task.response.ts";
import TaskColumn from "../../components/complex/task/column/task-column.tsx";
import {TaskStatus} from "../../enums/task-status.enum.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import TaskSummary from "../../components/complex/task/summary/task-summary.tsx";

const TasksPage = () => {

    const [taskResponses] = useSubscribe<TaskResponse[]>("/task")
    const [loadTasks] = usePublish("/task")

    useEffect(() => {
        loadTasks("")
    }, []);

    return (
        <>
            <TaskBoard>
                <TaskColumn name="Idea">
                    {
                        taskResponses ? (
                            taskResponses.filter(value => value.status === TaskStatus.IDEA).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
                        ) : (
                            <>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                            </>
                        )
                    }
                </TaskColumn>
                <TaskColumn name="ToDo">
                    {
                        taskResponses ? (
                            taskResponses.filter(value => value.status === TaskStatus.TODO).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
                        ) : (
                            <>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                            </>
                        )
                    }
                </TaskColumn>
                <TaskColumn name="On hold">
                    {
                        taskResponses ? (
                            taskResponses.filter(value => value.status === TaskStatus.ON_HOLD).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
                        ) : (
                            <>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                            </>
                        )
                    }
                </TaskColumn>
                <TaskColumn name="In progress">
                    {
                        taskResponses ? (
                            taskResponses.filter(value => value.status === TaskStatus.IN_PROGRESS).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
                        ) : (
                            <>
                                <Skeleton height={10}/>
                            </>
                        )
                    }
                </TaskColumn>
                <TaskColumn name="Done">
                    {
                        taskResponses ? (
                            taskResponses.filter(value => value.status === TaskStatus.DONE).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
                        ) : (
                            <>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                                <Skeleton height={10}/>
                            </>
                        )
                    }
                </TaskColumn>
            </TaskBoard>
        </>
    )
}

export default TasksPage
