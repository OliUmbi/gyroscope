import {TaskStatus} from "../enums/task-status.enum.ts";
import {TaskPriority} from "../enums/task-priority.enum.ts";

export interface TaskRequest {
    assignee: string | null,
    title: string,
    status: TaskStatus
    priority: TaskPriority
}