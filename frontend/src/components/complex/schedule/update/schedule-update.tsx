import "./schedule-update.scss";
import Text from "../../../base/text/text.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {ScheduleUpdateProps} from "./schedule-update.props.ts";
import {ProfileScheduleShift} from "../../../../enums/profile-schedule-shift.enum.ts";
import {localeDate, localeTime} from "../../../../utils/locale.util.ts";
import {dateConvert} from "../../../../utils/date.util.ts";
import useApi from "../../../../hooks/use-api.ts";
import {IdResponse} from "../../../../responses/id.response.ts";
import {useEffect} from "react";
import {ProfileScheduleRequest} from "../../../../requests/profile-schedule.request.ts";
import {Method} from "../../../../enums/method.enum.ts";
import Error from "../../error/error.tsx";

const ScheduleUpdate = (props: ScheduleUpdateProps) => {
    const [scheduleUpdate, scheduleUpdateData, scheduleUpdateError] = useApi<IdResponse>()

    useEffect(() => {
        if (scheduleUpdateData) {
            props.reload()
        }
    }, [scheduleUpdateData]);

    const update = (shift: ProfileScheduleShift) => {
        const profileScheduleRequest: ProfileScheduleRequest = {
            shift: shift
        }

        scheduleUpdate("profile/schedule/" + props.schedule.id, Method.PUT, undefined, profileScheduleRequest)
    }

    return (
        <>
            <div className="schedule-update">
                <div className="schedule-update__head">
                    <Text type="p" mono={true} bold={true} highlight={false}>{localeDate(dateConvert(props.schedule.time))}</Text>
                    <Text type="h3" mono={true} bold={true} highlight={true}>{localeTime(dateConvert(props.schedule.time))}</Text>
                </div>
                <IconButton onClick={() => update(ProfileScheduleShift.SLEEP)} highlight={props.schedule.shift === ProfileScheduleShift.SLEEP}>bed</IconButton>
                <IconButton onClick={() => update(ProfileScheduleShift.BREAK)} highlight={props.schedule.shift === ProfileScheduleShift.BREAK}>coffee</IconButton>
                <IconButton onClick={() => update(ProfileScheduleShift.MONITORING)} highlight={props.schedule.shift === ProfileScheduleShift.MONITORING}>monitor</IconButton>
                <IconButton onClick={() => update(ProfileScheduleShift.WORK)} highlight={props.schedule.shift === ProfileScheduleShift.WORK}>terminal</IconButton>
            </div>
            <Error title="Failed to update schedule" message={scheduleUpdateError}/>
        </>
    )
}

export default ScheduleUpdate
