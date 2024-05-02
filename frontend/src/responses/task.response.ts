import {ProfileResponse} from "./profile.response.ts";
import {TaskPriority} from "../enums/task-priority.enum.ts";
import {TaskStatus} from "../enums/task-status.enum.ts";

export interface TaskResponse {
    id: string,
    title: string,
    status: TaskStatus,
    priority: TaskPriority,
    creator: ProfileResponse,
    assignee: ProfileResponse,
    discussionId: string,
    created: string
}
