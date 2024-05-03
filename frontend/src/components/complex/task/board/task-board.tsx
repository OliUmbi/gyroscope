import "./task-board.scss";
import {TaskBoardProps} from "./task-board.props.ts";

const TaskBoard = (props: TaskBoardProps) => {
    return (
        <div className="task-board">
            {props.children}
        </div>
    )
}

export default TaskBoard
