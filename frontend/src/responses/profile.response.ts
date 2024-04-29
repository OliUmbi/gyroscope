import {ProfileSessionResponse} from "./profile-session.response.ts";
import {ProfileScheduleResponse} from "./profile-schedule.response.ts";

export interface ProfileResponse {
    name: string,
    sessions: ProfileSessionResponse[]
    schedule: ProfileScheduleResponse[]
}