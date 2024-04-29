import "./incident-check.scss";
import Text from "../../../base/text/text.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {IncidentCheckProps} from "./incident-check.props.ts";

const IncidentCheck = (props: IncidentCheckProps) => {

    return (
        <div className="incident-check">
            <IconButton onClick={() => {}} highlight={false}>{props.check.checked ? "check_box" : "check_box_outline_blank"}</IconButton>
            <div className="incident-check__body">
                <Text type="p" mono={false} bold={true} highlight={true}>{props.check.value}</Text>
            </div>
        </div>
    )
}

export default IncidentCheck
