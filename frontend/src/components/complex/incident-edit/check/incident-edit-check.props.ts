import {IncidentCheckRequest} from "../../../../requests/incident-check.request.ts";

export interface IncidentEditCheckProps {
    value: IncidentCheckRequest,
    setValue: (value: IncidentCheckRequest) => void,
    remove: () => void
}
