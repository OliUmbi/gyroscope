import {IncidentStatus} from "../enums/incident-status.enum.ts";
import {IncidentSeverity} from "../enums/incident-severity.enum.ts";
import {IncidentType} from "../enums/incident-type.enum.ts";
import {IncidentCheckRequest} from "./incident-check.request.ts";

export interface IncidentRequest {

    assignee: string,
    title: string,
    system: string,
    time: string,
    status: IncidentStatus,
    severity: IncidentSeverity,
    type: IncidentType,
    checks: IncidentCheckRequest[]
}
