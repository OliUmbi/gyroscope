import "./dashboard-tasks.scss";
import Text from "../../../base/text/text.tsx";

const DashboardTasks = () => {

    return (
        <div className="dashboard-tasks">
            <div className="dashboard-tasks__item">
                <Text type="p" mono={true} bold={false} highlight={false}>Tasks</Text>
            </div>
            <div className="dashboard-tasks__item">
                <Text type="p" mono={true} bold={false} highlight={false}>Open</Text>
                <Text type="h3" mono={false} bold={true} highlight={true}>12</Text>
            </div>
            <div className="dashboard-tasks__item">
                <Text type="p" mono={true} bold={false} highlight={false}>Unassigned</Text>
                <Text type="h3" mono={false} bold={true} highlight={true}>5</Text>
            </div>
            <div className="dashboard-tasks__item">
                <Text type="p" mono={true} bold={false} highlight={false}>Closed</Text>
                <Text type="h3" mono={false} bold={true} highlight={true}>6</Text>
            </div>
        </div>
    )
}

export default DashboardTasks
