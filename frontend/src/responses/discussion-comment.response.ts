import {ProfileResponse} from "./profile.response.ts";

export interface DiscussionCommentResponse {
    id: string,
    body: string,
    profile: ProfileResponse,
    created: string
}
