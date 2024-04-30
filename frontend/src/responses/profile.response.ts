import {ProfileSessionResponse} from "./profile-session.response.ts";
import {ProfileScheduleResponse} from "./profile-schedule.response.ts";

export interface ProfileResponse {
    id: string,
    name: string,
    sessions: ProfileSessionResponse[]
    schedule: ProfileScheduleResponse[]
}