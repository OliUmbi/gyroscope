import "./profile-edit-schedule.scss";
import Text from "../../../base/text/text.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {ProfileEditScheduleProps} from "./profile-edit-schedule.props.ts";
import {ProfileScheduleShift} from "../../../../enums/profile-schedule-shift.enum.ts";
import {localeDate, localeTime} from "../../../../utils/locale.util.ts";
import {dateConvert} from "../../../../utils/date.util.ts";
import usePublish from "../../../../hooks/use-publish.ts";
import {ProfileUpdatedScheduleRequest} from "../../../../requests/profile-updated-schedule.request.ts";

const ProfileEditSchedule = (props: ProfileEditScheduleProps) => {

    const [updateProfileSchedule] = usePublish("/update/profileSchedule")

    const onClick = (shift: ProfileScheduleShift) => {
        const profileUpdatedScheduleRequest: ProfileUpdatedScheduleRequest = {
            id: props.schedule.id,
            shift: shift
        }

        updateProfileSchedule(profileUpdatedScheduleRequest)
    }

    return (
        <div className="profile-schedule">
            <div className="profile-schedule__head">
                <Text type="p" mono={true} bold={true} highlight={false}>{localeDate(dateConvert(props.schedule.time))}</Text>
                <Text type="h3" mono={true} bold={true} highlight={true}>{localeTime(dateConvert(props.schedule.time))}</Text>
            </div>
            <IconButton onClick={() => onClick(ProfileScheduleShift.SLEEP)} highlight={props.schedule.shift === ProfileScheduleShift.SLEEP}>bed</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.BREAK)} highlight={props.schedule.shift === ProfileScheduleShift.BREAK}>coffee</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.MONITORING)} highlight={props.schedule.shift === ProfileScheduleShift.MONITORING}>monitor</IconButton>
            <IconButton onClick={() => onClick(ProfileScheduleShift.WORK)} highlight={props.schedule.shift === ProfileScheduleShift.WORK}>terminal</IconButton>
        </div>
    )
}

export default ProfileEditSchedule
