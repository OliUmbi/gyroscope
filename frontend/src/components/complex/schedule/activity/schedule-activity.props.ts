import {ActivityDTO} from "../../../../dtos/Activity.dto.ts";
import {ScheduleShift} from "../../../../enums/schedule-shift.enum.ts";

export interface ScheduleActivityProps {
    activity: ActivityDTO,
    onUpdate: (shift: ScheduleShift) => void
}
