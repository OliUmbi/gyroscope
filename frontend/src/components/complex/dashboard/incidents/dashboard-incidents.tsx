import "./dashboard-incidents.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";
import {DashboardIncidentsProps} from "./dashboard-incidents.props.ts";

const DashboardIncidents = (props: DashboardIncidentsProps) => {

    return (
        <Link to="/incidents">
            <div className="dashboard-incidents">
                <Text type="p" mono={true} bold={false} highlight={false}>{props.name}</Text>
                <Text type="h1" mono={false} bold={true} highlight={true}>{props.value}</Text>
            </div>
        </Link>
    )
}

export default DashboardIncidents
