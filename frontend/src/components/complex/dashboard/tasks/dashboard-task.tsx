import "./dashboard-task.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";
import {DashboardTaskProps} from "./dashboard-task.props.ts";

const DashboardTask = (props: DashboardTaskProps) => {

    return (
            <Link to="/tasks">
                <div className="dashboard-task">
                    <Text type="p" mono={true} bold={false} highlight={false}>{props.name}</Text>
                    <div className="dashboard-task__progress">
                        <div className="dashboard-task__bar" style={{width: props.value}}></div>
                        <Text type="s" mono={true} bold={false} highlight={false}>{props.value}</Text>
                    </div>
                </div>
            </Link>
    )
}

export default DashboardTask
