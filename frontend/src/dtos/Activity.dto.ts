import {ScheduleShift} from "../enums/schedule-shift.enum.ts";

export interface ActivityDTO {
    time: Date
    shift: ScheduleShift | null
}