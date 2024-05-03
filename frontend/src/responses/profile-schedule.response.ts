import {ProfileScheduleShift} from "../enums/profile-schedule-shift.enum.ts";

export interface ProfileScheduleResponse {
    id: string,
    time: string,
    shift: ProfileScheduleShift,
}
