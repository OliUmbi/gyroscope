import "./task-summary.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";
import {TaskResponse} from "../../../../responses/task.response.ts";
import {TaskSummaryProps} from "./task-summary.props.ts";

const TaskSummary = (props: TaskSummaryProps) => {
    return (
        <Link to={"/tasks/" + props.task.id}>
            <div className="task-summary">
                <Text type="s" mono={true} bold={false} highlight={false}>{props.task.priority}</Text>
                <div>
                    <Text type="p" mono={false} bold={true} highlight={true}>{props.task.title}</Text>
                    <Text type="s" mono={false} bold={false} highlight={false}>{props.task.assignee.name}</Text>
                </div>
            </div>
        </Link>
    )
}

export default TaskSummary
