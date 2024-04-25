import "./dashboard-tasks.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";

const DashboardTasks = () => {

    return (
        <div className="dashboard-tasks">
            <Link to="/tasks">
                <div className="dashboard-tasks__item">
                    <Text type="p" mono={true} bold={false} highlight={false}>ToDo</Text>
                    <div className="dashboard-tasks__progress">
                        <div className="dashboard-tasks__bar" style={{width: "27%"}}></div>
                        <Text type="s" mono={true} bold={false} highlight={false}>27%</Text>
                    </div>
                </div>
            </Link>
            <Link to="/tasks">
                <div className="dashboard-tasks__item">
                    <Text type="p" mono={true} bold={false} highlight={false}>On hold</Text>
                    <div className="dashboard-tasks__progress">
                        <div className="dashboard-tasks__bar" style={{width: "12%"}}></div>
                        <Text type="s" mono={true} bold={false} highlight={false}>12%</Text>
                    </div>
                </div>
            </Link>
            <Link to="/tasks">
                <div className="dashboard-tasks__item">
                    <Text type="p" mono={true} bold={false} highlight={false}>In progress</Text>
                    <div className="dashboard-tasks__progress">
                        <div className="dashboard-tasks__bar" style={{width: "38%"}}></div>
                        <Text type="s" mono={true} bold={false} highlight={false}>38%</Text>
                    </div>
                </div>
            </Link>
            <Link to="/tasks">
                <div className="dashboard-tasks__item">
                    <Text type="p" mono={true} bold={false} highlight={false}>Done</Text>
                    <div className="dashboard-tasks__progress">
                        <div className="dashboard-tasks__bar" style={{width: "23%"}}></div>
                        <Text type="s" mono={true} bold={false} highlight={false}>23%</Text>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DashboardTasks
