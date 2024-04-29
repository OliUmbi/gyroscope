import {ProfileResponse} from "../../../../responses/profile.response.ts";

export interface DashboardScheduleProps {
    icon: string,
    title: string,
    profiles: ProfileResponse[]
}