import {ProfileScheduleShift} from "../enums/profile-schedule-shift.enum.ts";

export interface ProfileUpdatedScheduleRequest {
    id: string
    shift: ProfileScheduleShift
}