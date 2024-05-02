import Discussion from "../../components/complex/discussion/discussion.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Text from "../../components/base/text/text.tsx";
import TaskDetail from "../../components/complex/task/detail/task-detail.tsx";
import {useParams} from "react-router-dom";
import useApi from "../../hooks/use-api.ts";
import {useEffect} from "react";
import {locale} from "../../utils/locale.util.ts";
import {dateConvert} from "../../utils/date.util.ts";
import SkeletonText from "../../components/base/skeleton-text/skeleton-text.tsx";
import Split from "../../components/layout/split/split.tsx";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {TaskResponse} from "../../responses/task.response.ts";
import {Method} from "../../enums/method.enum.ts";

const TaskPage = () => {

    let {id} = useParams();

    const [task, taskData] = useApi<TaskResponse>()

    useEffect(() => {
        if (id) {
            task("task/" + id, Method.GET)
        }
    }, [id]);

    return (
        <>
            <Linear>
                <div>
                    {
                        taskData ? (
                            <Text type="s" mono={true} bold={false} highlight={false}>{locale(dateConvert(taskData.created))}</Text>
                        ) : (
                            <SkeletonText type="s"/>
                        )
                    }
                    {
                        taskData ? (
                            <Text type="h2" mono={false} bold={true} highlight={true}>{taskData.title}</Text>
                        ) : (
                            <SkeletonText type="h2"/>
                        )
                    }
                </div>
                <Split>
                    <Split>
                        {
                            taskData ? (
                                <TaskDetail name="Status" value={taskData.status}/>
                            ) : (
                                <Skeleton height={8}/>
                            )
                        }
                        {
                            taskData ? (
                                <TaskDetail name="Priority" value={taskData.priority}/>
                            ) : (
                                <Skeleton height={8}/>
                            )
                        }
                    </Split>
                    <Split>
                        {
                            taskData ? (
                                <TaskDetail name="Assignee" value={taskData.assignee ? taskData.assignee.name : "Undefined"}/>
                            ) : (
                                <Skeleton height={8}/>
                            )
                        }
                        {
                            taskData ? (
                                <TaskDetail name="Creator" value={taskData.creator.name}/>
                            ) : (
                                <Skeleton height={8}/>
                            )
                        }
                    </Split>
                </Split>
            </Linear>
            <Linear>
                {
                    taskData ? (
                        <Discussion id={taskData.discussionId}/>
                    ) : (
                        <Skeleton height={32}/>
                    )
                }
            </Linear>
        </>
    )
}

export default TaskPage
