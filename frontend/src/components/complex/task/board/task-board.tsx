import "./task-board.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";
import {TaskBoardProps} from "./task-board.props.ts";

const TaskBoard = (props: TaskBoardProps) => {
    return (
        <div className="task-board">
            {props.children}
        </div>
    )
}

export default TaskBoard
