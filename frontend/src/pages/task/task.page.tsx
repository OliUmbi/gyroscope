import Comment from "../../components/complex/comment/comment.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Text from "../../components/base/text/text.tsx";
import TaskDetails from "../../components/complex/task/details/task-details.tsx";

const TaskPage = () => {

    return (
        <>
            <Linear>
                <div>
                    <Text type="s" mono={true} bold={false} highlight={false}>24.04.2024 15:02</Text>
                    <Text type="h2" mono={false} bold={true} highlight={true}>Dockerize service XY</Text>
                </div>
                <TaskDetails/>
            </Linear>
            <Linear>
                <Comment/>
            </Linear>
        </>
    )
}

export default TaskPage
