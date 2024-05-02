import "./schedule-edit-shift.scss";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {ProfileScheduleShift} from "../../../../enums/profile-schedule-shift.enum.ts";
import Text from "../../../base/text/text.tsx";
import useApi from "../../../../hooks/use-api.ts";
import {ProfileCreateScheduleRequest} from "../../../../requests/profile-create-schedule.request.ts";

const ScheduleEditShift = () => {

    const [profileScheduleCreate] = useApi("/profile/schedule/create")

    const onClick = (shift: ProfileScheduleShift) => {
        const profileCreateScheduleRequest: ProfileCreateScheduleRequest = {
            shift: shift
        }

        profileScheduleCreate(profileCreateScheduleRequest)
    }

    return (
        <div className="schedule-edit-shift">
            <div className="schedule-edit-shift__head">
                <Text type="h3" mono={true} bold={true} highlight={true}>Next</Text>
            </div>
            <IconButton onClick={() => onClick(ProfileScheduleShift.SLEEP)} highlight={false}>bed</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.BREAK)} highlight={false}>coffee</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.MONITORING)} highlight={false}>monitor</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.WORK)} highlight={false}>terminal</IconButton>
        </div>
    )
}

export default ScheduleEditShift
