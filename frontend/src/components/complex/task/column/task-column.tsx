import "./task-column.scss";
import Text from "../../../base/text/text.tsx";
import {TaskColumnProps} from "./task-column.props.ts";

const TaskColumn = (props: TaskColumnProps) => {
    return (
        <div className="task-column">
            <Text type="h3" mono={false} bold={true} highlight={true}>{props.name}</Text>
            {props.children}
        </div>
    )
}

export default TaskColumn
