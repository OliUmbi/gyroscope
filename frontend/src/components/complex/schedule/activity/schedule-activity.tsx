import "./schedule-activity.scss";
import Text from "../../../base/text/text.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {ScheduleActivityProps} from "./schedule-activity.props.ts";
import {ScheduleShift} from "../../../../enums/schedule-shift.enum.ts";
import {localeDate, localeTime} from "../../../../utils/locale.util.ts";

const ScheduleActivity = (props: ScheduleActivityProps) => {

    return (
        <div className="schedule-activity">
            <div className="schedule-activity__head">
                <Text type="p" mono={true} bold={true} highlight={false}>{localeDate(props.activity.time)}</Text>
                <Text type="h3" mono={true} bold={true} highlight={true}>{localeTime(props.activity.time)}</Text>
            </div>
                <IconButton onClick={() => props.onUpdate(ScheduleShift.SLEEP)} highlight={props.activity.shift === ScheduleShift.SLEEP}>bed</IconButton>
                <IconButton onClick={() => props.onUpdate(ScheduleShift.BREAK)} highlight={props.activity.shift === ScheduleShift.BREAK}>coffee</IconButton>
                <IconButton onClick={() => props.onUpdate(ScheduleShift.MONITORING)} highlight={props.activity.shift === ScheduleShift.MONITORING}>monitor</IconButton>
                <IconButton onClick={() => props.onUpdate(ScheduleShift.WORK)} highlight={props.activity.shift === ScheduleShift.WORK}>terminal</IconButton>
        </div>
    )
}

export default ScheduleActivity
