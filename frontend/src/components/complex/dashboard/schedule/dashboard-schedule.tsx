import "./dashboard-schedule.scss";
import Icon from "../../../base/icon/icon.tsx";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";
import {DashboardScheduleProps} from "./dashboard-schedule.props.ts";

const DashboardSchedule = (props: DashboardScheduleProps) => {


    return (
        <Link to="/schedule">
            <div className="dashboard-schedule">
                <div className="dashboard-schedule__head">
                    <Icon>{props.icon}</Icon>
                    <Text type="s" mono={true} bold={false} highlight={false}>{props.title}</Text>
                </div>
                <div className="dashboard-schedule__body">
                    {
                        props.profiles.map((profile, key) => <Text type="p" mono={false} bold={true} highlight={true} key={key}>{profile.name}</Text>)
                    }
                </div>
            </div>
        </Link>
    )
}

export default DashboardSchedule
