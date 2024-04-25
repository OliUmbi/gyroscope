import "./task-details.scss";
import Text from "../../../base/text/text.tsx";

const TaskDetails = () => {

    return (
        <div className="task-details">
            <div className="task-details__item">
                <Text type="s" mono={true} bold={false} highlight={false}>Status</Text>
                <Text type="p" mono={false} bold={true} highlight={true}>In progress</Text>
            </div>
            <div className="task-details__item">
                <Text type="s" mono={true} bold={false} highlight={false}>Priority</Text>
                <Text type="p" mono={false} bold={true} highlight={true}>HIGH</Text>
            </div>
            <div className="task-details__item">
                <Text type="s" mono={true} bold={false} highlight={false}>Assigned</Text>
                <Text type="p" mono={false} bold={true} highlight={true}>Loosli</Text>
            </div>
            <div className="task-details__item">
                <Text type="s" mono={true} bold={false} highlight={false}>Creator</Text>
                <Text type="p" mono={false} bold={true} highlight={true}>Umbricht</Text>
            </div>
        </div>
    )
}

export default TaskDetails
