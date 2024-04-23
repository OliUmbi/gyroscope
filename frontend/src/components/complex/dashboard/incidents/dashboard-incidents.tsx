import "./dashboard-incidents.scss";
import Text from "../../../base/text/text.tsx";

const DashboardIncidents = () => {

    return (
        <div className="dashboard-incidents">
            <div className="dashboard-incidents__item">
                <Text type="p" mono={true} bold={false} highlight={false}>Incidents</Text>
            </div>
            <div className="dashboard-incidents__item">
                <Text type="p" mono={true} bold={false} highlight={false}>Open</Text>
                <Text type="h3" mono={false} bold={true} highlight={true}>12</Text>
            </div>
            <div className="dashboard-incidents__item">
                <Text type="p" mono={true} bold={false} highlight={false}>Unassigned</Text>
                <Text type="h3" mono={false} bold={true} highlight={true}>5</Text>
            </div>
            <div className="dashboard-incidents__item">
                <Text type="p" mono={true} bold={false} highlight={false}>Closed</Text>
                <Text type="h3" mono={false} bold={true} highlight={true}>6</Text>
            </div>
        </div>
    )
}

export default DashboardIncidents
