import "./incident-check.scss";
import Text from "../../../base/text/text.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {IncidentCheckProps} from "./incident-check.props.ts";
import useApi from "../../../../hooks/use-api.ts";
import {useEffect} from "react";
import {Method} from "../../../../enums/method.enum.ts";
import {MessageResponse} from "../../../../responses/message.response.ts";
import {IncidentCheckRequest} from "../../../../requests/incident-check.request.ts";

const IncidentCheck = (props: IncidentCheckProps) => {

    const [checkUpdate, checkUpdateData] = useApi<MessageResponse>()

    useEffect(() => {
        if (checkUpdateData) {
            props.reload()
        }
    }, [checkUpdateData]);

    const update = (checked: boolean) => {

        const incidentCheckRequest: IncidentCheckRequest = {
            value: props.check.value,
            checked: checked
        }

        checkUpdate("incident/check/" + props.check.id, Method.PUT, undefined, incidentCheckRequest)
    }

    return (
        <div className="incident-check">
            <IconButton onClick={() => update(!props.check.checked)} highlight={false}>{props.check.checked ? "check_box" : "check_box_outline_blank"}</IconButton>
            <div className="incident-check__body">
                <Text type="p" mono={false} bold={true} highlight={true}>{props.check.value}</Text>
            </div>
        </div>
    )
}

export default IncidentCheck
