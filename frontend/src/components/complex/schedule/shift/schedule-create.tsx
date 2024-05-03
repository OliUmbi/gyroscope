import "./schedule-create.scss";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {ProfileScheduleShift} from "../../../../enums/profile-schedule-shift.enum.ts";
import Text from "../../../base/text/text.tsx";
import {ScheduleCreateProps} from "./schedule-create.props.ts";
import useApi from "../../../../hooks/use-api.ts";
import {IdResponse} from "../../../../responses/id.response.ts";
import {useEffect} from "react";
import {Method} from "../../../../enums/method.enum.ts";
import {ProfileScheduleRequest} from "../../../../requests/profile-schedule.request.ts";
import Error from "../../error/error.tsx";

const ScheduleCreate = (props: ScheduleCreateProps) => {

    const [scheduleCreate, scheduleCreateData, scheduleCreateError] = useApi<IdResponse>()

    useEffect(() => {
        if (scheduleCreateData) {
            props.reload()
        }
    }, [scheduleCreateData]);

    const create = (shift: ProfileScheduleShift) => {
        const profileScheduleRequest: ProfileScheduleRequest = {
            shift: shift
        }

        scheduleCreate("profile/schedule", Method.POST, undefined, profileScheduleRequest)
    }

    return (
        <>
            <div className="schedule-create">
                <div className="schedule-create__head">
                    <Text type="h3" mono={true} bold={true} highlight={true}>Next</Text>
                </div>
                <IconButton onClick={() => create(ProfileScheduleShift.SLEEP)} highlight={false}>bed</IconButton>
                <IconButton onClick={() => create(ProfileScheduleShift.BREAK)} highlight={false}>coffee</IconButton>
                <IconButton onClick={() => create(ProfileScheduleShift.MONITORING)} highlight={false}>monitor</IconButton>
                <IconButton onClick={() => create(ProfileScheduleShift.WORK)} highlight={false}>terminal</IconButton>
            </div>
            <Error title="Failed to create schedule" message={scheduleCreateError}/>
        </>
    )
}

export default ScheduleCreate
