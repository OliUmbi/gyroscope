import {DiscussionResponse} from "./discussion.response.ts";
import {ProfileResponse} from "./profile.response.ts";
import {IncidentType} from "../enums/incident-type.enum.ts";
import {IncidentSeverity} from "../enums/incident-severity.enum.ts";
import {IncidentStatus} from "../enums/incident-status.enum.ts";
import {IncidentCheckResponse} from "./incident-check.response.ts";

export interface IncidentResponse {
    id: string,
    title: string,
    system: string,
    time: string,
    status: IncidentStatus,
    severity: IncidentSeverity,
    type: IncidentType,
    checks: IncidentCheckResponse[],
    creator: ProfileResponse,
    assignee: ProfileResponse,
    discussion: DiscussionResponse,
    created: string,
    updated: string
}
