import "./incident-summary.scss";
import Text from "../../../base/text/text.tsx";
import {Link} from "react-router-dom";
import {IncidentSummaryProps} from "./incident-summary.props.ts";
import {locale} from "../../../../utils/locale.util.ts";
import {dateConvert} from "../../../../utils/date.util.ts";

const IncidentSummary = (props: IncidentSummaryProps) => {

    return (
        <Link to={"/incidents/" + props.incidentResponse.id}>

            <div className="incident-summary">
                <div>
                    <Text type="s" mono={true} bold={false} highlight={false}>{locale(dateConvert(props.incidentResponse.time))}</Text>
                    <Text type="h3" mono={false} bold={true} highlight={true}>{props.incidentResponse.title}</Text>
                </div>

                <div className="incident-summary__details">
                    <div className="incident-summary__detail">
                        <Text type="s" mono={true} bold={false} highlight={false}>Status</Text>
                        <Text type="p" mono={true} bold={true} highlight={true}>{props.incidentResponse.status}</Text>
                    </div>
                    <div className="incident-summary__detail">
                        <Text type="s" mono={true} bold={false} highlight={false}>Severity</Text>
                        <Text type="p" mono={true} bold={true} highlight={true}>{props.incidentResponse.severity}</Text>
                    </div>
                    <div className="incident-summary__detail">
                        <Text type="s" mono={true} bold={false} highlight={false}>Type</Text>
                        <Text type="p" mono={true} bold={true} highlight={true}>{props.incidentResponse.type}</Text>
                    </div>
                    <div className="incident-summary__detail">
                        <Text type="s" mono={true} bold={false} highlight={false}>Created</Text>
                        <Text type="p" mono={true} bold={true} highlight={true}>{locale(dateConvert(props.incidentResponse.created))}</Text>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default IncidentSummary
