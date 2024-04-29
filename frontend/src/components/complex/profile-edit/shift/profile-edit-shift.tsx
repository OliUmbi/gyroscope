import "./profile-edit-shift.scss";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {ProfileScheduleShift} from "../../../../enums/profile-schedule-shift.enum.ts";
import Text from "../../../base/text/text.tsx";
import usePublish from "../../../../hooks/use-publish.ts";
import {ProfileCreateScheduleRequest} from "../../../../requests/profile-create-schedule.request.ts";

const ProfileEditShift = () => {

    const [updateProfileSchedule] = usePublish("/create/profileSchedule")

    const onClick = (shift: ProfileScheduleShift) => {
        const profileCreateScheduleRequest: ProfileCreateScheduleRequest = {
            shift: shift
        }

        updateProfileSchedule(profileCreateScheduleRequest)
    }

    return (
        <div className="profile-edit-shift">
            <div className="profile-schedule__head">
                <Text type="h3" mono={true} bold={true} highlight={true}>Next</Text>
            </div>
            <IconButton onClick={() => onClick(ProfileScheduleShift.SLEEP)} highlight={false}>bed</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.BREAK)} highlight={false}>coffee</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.MONITORING)} highlight={false}>monitor</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.WORK)} highlight={false}>terminal</IconButton>
        </div>
    )
}

export default ProfileEditShift
