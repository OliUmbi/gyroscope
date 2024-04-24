import IncidentSummary from "../../components/complex/incident/summary/incident-summary.tsx";
import Split from "../../components/layout/split/split.tsx";

const IncidentsPage = () => {
    return (
        <>
            <Split>
                <IncidentSummary/>
                <IncidentSummary/>
                <IncidentSummary/>
                <IncidentSummary/>
            </Split>
        </>
    )
}

export default IncidentsPage
