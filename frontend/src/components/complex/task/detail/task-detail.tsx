import "./task-detail.scss";
import Text from "../../../base/text/text.tsx";
import {TaskDetailProps} from "./task-detail.props.ts";

const TaskDetail = (props: TaskDetailProps) => {

    return (
        <div className="task-detail">
            <Text type="s" mono={true} bold={false} highlight={false}>{props.name}</Text>
            <Text type="p" mono={false} bold={true} highlight={true}>{props.value}</Text>
        </div>
    )
}

export default TaskDetail
