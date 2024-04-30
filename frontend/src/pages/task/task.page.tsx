import Discussion from "../../components/complex/discussion/discussion.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Text from "../../components/base/text/text.tsx";
import TaskDetail from "../../components/complex/task/detail/task-detail.tsx";
import {useParams} from "react-router-dom";
import useSubscribe from "../../hooks/use-subscribe.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import {IdRequest} from "../../requests/id.request.ts";
import {locale} from "../../utils/locale.util.ts";
import {dateConvert} from "../../utils/date.util.ts";
import SkeletonText from "../../components/base/skeleton-text/skeleton-text.tsx";
import Split from "../../components/layout/split/split.tsx";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {TaskResponse} from "../../responses/task.response.ts";

const TaskPage = () => {

    let {id} = useParams();
    const [taskResponse] = useSubscribe<TaskResponse>("/task/id")
    const [loadTask] = usePublish("/task/id")

    useEffect(() => {
        if (id) {
            let idRequest: IdRequest = {
                id: id
            }

            loadTask(idRequest)
        }
    }, [id]);

    return (
        <>
            <Linear>
                <div>
                    {
                        taskResponse ? (
                            <Text type="s" mono={true} bold={false} highlight={false}>{locale(dateConvert(taskResponse.created))}</Text>
                        ) : (
                            <SkeletonText type="s"/>
                        )
                    }
                    {
                        taskResponse ? (
                            <Text type="h2" mono={false} bold={true} highlight={true}>{taskResponse.title}</Text>
                        ) : (
                            <SkeletonText type="h2"/>
                        )
                    }
                </div>
                <Split>
                    <Split>
                        {
                            taskResponse ? (
                                <TaskDetail name="Status" value={taskResponse.status}/>
                            ) : (
                                <Skeleton height={8}/>
                            )
                        }
                        {
                            taskResponse ? (
                                <TaskDetail name="Priority" value={taskResponse.priority}/>
                            ) : (
                                <Skeleton height={8}/>
                            )
                        }
                    </Split>
                    <Split>
                        {
                            taskResponse?.assignee ? (
                                <TaskDetail name="Assignee" value={taskResponse.assignee.name}/>
                            ) : (
                                <Skeleton height={8}/>
                            )
                        }
                        {
                            taskResponse?.creator ? (
                                <TaskDetail name="Creator" value={taskResponse.creator.name}/>
                            ) : (
                                <Skeleton height={8}/>
                            )
                        }
                    </Split>
                </Split>
            </Linear>
            <Linear>
                {
                    taskResponse?.discussion ? (
                        <Discussion discussion={taskResponse.discussion}/>
                    ) : (
                        <Skeleton height={32}/>
                    )
                }
            </Linear>
        </>
    )
}

export default TaskPage
