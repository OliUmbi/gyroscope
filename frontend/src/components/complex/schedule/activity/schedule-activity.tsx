import "./schedule-activity.scss";
import Text from "../../../base/text/text.tsx";
import IconButton from "../../../base/icon-button/icon-button.tsx";
import {ScheduleActivityProps} from "./schedule-activity.props.ts";
import {Shift} from "../../../../enums/shift.enum.ts";

const ScheduleActivity = (props: ScheduleActivityProps) => {

    return (
        <div className="schedule-activity">
            <Text type="h3" mono={false} bold={true} highlight={true}>{props.activity.time.toLocaleTimeString("de-CH", { hour: "2-digit", minute: "2-digit" })}</Text>
            <div>
                <IconButton onClick={() => props.onUpdate(Shift.SLEEP)} highlight={props.activity.shift === Shift.SLEEP}>bed</IconButton>
                <IconButton onClick={() => props.onUpdate(Shift.BREAK)} highlight={props.activity.shift === Shift.BREAK}>coffee</IconButton>
                <IconButton onClick={() => props.onUpdate(Shift.MONITORING)} highlight={props.activity.shift === Shift.MONITORING}>monitor</IconButton>
                <IconButton onClick={() => props.onUpdate(Shift.WORK)} highlight={props.activity.shift === Shift.WORK}>terminal</IconButton>
            </div>
        </div>
    )
}

export default ScheduleActivity
