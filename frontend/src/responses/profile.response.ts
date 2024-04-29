import {ProfileSessionResponse} from "./profile-session.response.ts";

export interface ProfileResponse {
    name: string,
    sessions: ProfileSessionResponse[]
}