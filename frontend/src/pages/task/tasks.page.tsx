import TaskBoard from "../../components/complex/task/board/task-board.tsx";
import useApi from "../../hooks/use-api.ts";
import {useEffect} from "react";
import {TaskResponse} from "../../responses/task.response.ts";
import TaskColumn from "../../components/complex/task/column/task-column.tsx";
import {TaskStatus} from "../../enums/task-status.enum.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import TaskSummary from "../../components/complex/task/summary/task-summary.tsx";
import {Method} from "../../enums/method.enum.ts";
import Error from "../../components/complex/error/error.tsx";

const TasksPage = () => {

    const [tasks, tasksData, tasksError] = useApi<TaskResponse[]>()

    useEffect(() => {
        tasks("task", Method.GET)
    }, []);

    return (
        <>
            <Error title="Failed to load tasks" message={tasksError}/>
            <TaskBoard>
                <TaskColumn name="Idea">
                    {
                        tasksData ? (
                            tasksData.filter(value => value.status === TaskStatus.IDEA).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
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
                        tasksData ? (
                            tasksData.filter(value => value.status === TaskStatus.TODO).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
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
                        tasksData ? (
                            tasksData.filter(value => value.status === TaskStatus.ON_HOLD).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
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
                        tasksData ? (
                            tasksData.filter(value => value.status === TaskStatus.IN_PROGRESS).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
                        ) : (
                            <>
                                <Skeleton height={10}/>
                            </>
                        )
                    }
                </TaskColumn>
                <TaskColumn name="Done">
                    {
                        tasksData ? (
                            tasksData.filter(value => value.status === TaskStatus.DONE).map((taskResponse, key) => <TaskSummary task={taskResponse} key={key}/>)
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
