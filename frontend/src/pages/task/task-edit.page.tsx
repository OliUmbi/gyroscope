import TaskEditDetails from "../../components/complex/task-edit/details/task-edit-details.tsx";
import Button from "../../components/base/button/button.tsx";
import Text from "../../components/base/text/text.tsx";
import Linear from "../../components/layout/linear/linear.tsx";

const TaskEditPage = () => {

    return (
        <>
            <Linear>
                <TaskEditDetails/>
            </Linear>
            <Button onClick={() => {}} highlight={false}>
                <Text type="p" mono={false} bold={true} highlight={true}>Delete</Text>
            </Button>
        </>
    )
}

export default TaskEditPage
