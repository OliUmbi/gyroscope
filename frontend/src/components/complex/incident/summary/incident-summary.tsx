import "./incident-summary.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";
import {IncidentType} from "../../../../enums/incident-type.enum.ts";
import {IncidentSeverity} from "../../../../enums/incident-severity.enum.ts";
import {IncidentStatus} from "../../../../enums/incident-status.enum.ts";

const IncidentSummary = () => {

    const data = {
        details: {
            status: IncidentStatus.OPEN,
            severity: IncidentSeverity.HIGH,
            type: IncidentType.ATTACK,
            assigned: "Loosli",
        },
        checklist: [
            {
                name: "Extracted logs",
                checked: false,
            },
            {
                name: "Contacted working group",
                checked: true,
            },
            {
                name: "Update firewall",
                checked: false,
            }
        ]
    }

    return (
        <Link to="/incidents/123">

            <div className="incident-summary">
                <div>
                    <Text type="s" mono={true} bold={false} highlight={false}>24.04.2024 15:02</Text>
                    <Text type="h3" mono={false} bold={true} highlight={true}>Strange port with suspicious
                        traffic</Text>
                </div>

                <div className="incident-summary__details">
                    <div className="incident-summary__detail">
                        <Text type="s" mono={true} bold={false} highlight={false}>Status</Text>
                        <Text type="p" mono={true} bold={true} highlight={true}>{data.details.status}</Text>
                    </div>
                    <div className="incident-summary__detail">
                        <Text type="s" mono={true} bold={false} highlight={false}>Severity</Text>
                        <Text type="p" mono={true} bold={true} highlight={true}>{data.details.severity}</Text>
                    </div>
                    <div className="incident-summary__detail">
                        <Text type="s" mono={true} bold={false} highlight={false}>Type</Text>
                        <Text type="p" mono={true} bold={true} highlight={true}>{data.details.type}</Text>
                    </div>
                    <div className="incident-summary__detail">
                        <Text type="s" mono={true} bold={false} highlight={false}>Assigned</Text>
                        <Text type="p" mono={true} bold={true} highlight={true}>{data.details.assigned}</Text>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default IncidentSummary
