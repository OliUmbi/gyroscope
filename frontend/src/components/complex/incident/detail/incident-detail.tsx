import "./incident-detail.scss";
import Text from "../../../base/text/text.tsx";
import {IncidentDetailProps} from "./incident-detail.props.ts";

const IncidentDetail = (props: IncidentDetailProps) => {

    return (
        <div className="incident-detail">
            <Text type="s" mono={true} bold={false} highlight={false}>{props.name}</Text>
            <Text type="p" mono={false} bold={true} highlight={true}>{props.value}</Text>
        </div>
    )
}

export default IncidentDetail
