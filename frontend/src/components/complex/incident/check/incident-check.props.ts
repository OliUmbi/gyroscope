import {IncidentCheckResponse} from "../../../../responses/incident-check.response.ts";

export interface IncidentCheckProps {
    check: IncidentCheckResponse,
    reload: () => void
}
