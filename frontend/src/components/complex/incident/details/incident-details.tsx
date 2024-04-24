import "./incident-details.scss";
import Text from "../../../base/text/text.tsx";
import {IncidentStatus} from "../../../../enums/incident-status.enum.ts";
import {IncidentSeverity} from "../../../../enums/incident-severity.enum.ts";
import {IncidentType} from "../../../../enums/incident-type.enum.ts";
import {locale} from "../../../../utils/locale.util.ts";

const IncidentDetails = () => {

    const data = {
            status: IncidentStatus.OPEN,
            severity: IncidentSeverity.HIGH,
            type: IncidentType.ATTACK,
            creator: "Umbricht",
            assigned: "Loosli",
            system: "Server 02",
            created: new Date(),
            updated: new Date()
    }

    return (
        <div className="incident-details">
            <div className="incident-details__group">
                <div className="incident-details__item">
                    <Text type="s" mono={true} bold={false} highlight={false}>Status</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>{data.status}</Text>
                </div>
                <div className="incident-details__item">
                    <Text type="s" mono={true} bold={false} highlight={false}>Severity</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>{data.severity}</Text>
                </div>
            </div>
            <div className="incident-details__group">
                <div className="incident-details__item">
                    <Text type="s" mono={true} bold={false} highlight={false}>Category</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>{data.type}</Text>
                </div>
                <div className="incident-details__item">
                    <Text type="s" mono={true} bold={false} highlight={false}>System</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>{data.system}</Text>
                </div>
            </div>
            <div className="incident-details__group">
                <div className="incident-details__item">
                    <Text type="s" mono={true} bold={false} highlight={false}>Creator</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>{data.creator}</Text>
                </div>
                <div className="incident-details__item">
                    <Text type="s" mono={true} bold={false} highlight={false}>Assigned</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>{data.assigned}</Text>
                </div>
            </div>
            <div className="incident-details__group">
                <div className="incident-details__item">
                    <Text type="s" mono={true} bold={false} highlight={false}>Created</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>{locale(data.created)}</Text>
                </div>
                <div className="incident-details__item">
                    <Text type="s" mono={true} bold={false} highlight={false}>Updated</Text>
                    <Text type="p" mono={false} bold={true} highlight={true}>{locale(data.updated)}</Text>
                </div>
            </div>


        </div>
    )
}

export default IncidentDetails
