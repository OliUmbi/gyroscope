import "./dashboard-incidents.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";

const DashboardIncidents = () => {

    return (
        <div className="dashboard-incidents">
            <Link to="/incidents">
                <div className="dashboard-incidents__item">
                    <Text type="p" mono={true} bold={false} highlight={false}>Critical</Text>
                    <Text type="h1" mono={false} bold={true} highlight={true}>4</Text>
                </div>
            </Link>
            <Link to="/incidents">
                <div className="dashboard-incidents__item">
                    <Text type="p" mono={true} bold={false} highlight={false}>High</Text>
                    <Text type="h1" mono={false} bold={true} highlight={true}>2</Text>
                </div>
            </Link>
            <Link to="/incidents">
                <div className="dashboard-incidents__item">
                    <Text type="p" mono={true} bold={false} highlight={false}>Medium</Text>
                    <Text type="h1" mono={false} bold={true} highlight={true}>6</Text>
                </div>
            </Link>
            <Link to="/incidents">
                <div className="dashboard-incidents__item">
                    <Text type="p" mono={true} bold={false} highlight={false}>Low</Text>
                    <Text type="h1" mono={false} bold={true} highlight={true}>3</Text>
                </div>
            </Link>
        </div>
    )
}

export default DashboardIncidents
