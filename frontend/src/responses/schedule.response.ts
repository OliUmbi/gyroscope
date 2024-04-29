import {ProfileResponse} from "./profile.response.ts";
import {ScheduleShift} from "../enums/schedule-shift.enum.ts";

export interface ScheduleResponse {
    id: string,
    time: string,
    shift: ScheduleShift,
    profile: ProfileResponse
}
