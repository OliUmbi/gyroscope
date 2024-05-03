import {ProfileScheduleResponse} from "../../../../responses/profile-schedule.response.ts";

export interface ScheduleUpdateProps {
    schedule: ProfileScheduleResponse,
    reload: () => void
}
