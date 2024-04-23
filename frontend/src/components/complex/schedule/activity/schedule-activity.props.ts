import {ActivityDTO} from "../../../../dtos/Activity.dto.ts";
import {Shift} from "../../../../enums/shift.enum.ts";

export interface ScheduleActivityProps {
    activity: ActivityDTO,
    onUpdate: (shift: Shift) => void
}
