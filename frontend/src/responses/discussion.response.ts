import {DiscussionCommentResponse} from "./discussion-comment.response.ts";

export interface DiscussionResponse {
    id: string,
    comments: DiscussionCommentResponse[]
}
