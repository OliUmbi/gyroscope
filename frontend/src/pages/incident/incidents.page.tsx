import IncidentSummary from "../../components/complex/incident/summary/incident-summary.tsx";
import Split from "../../components/layout/split/split.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import {IncidentResponse} from "../../responses/incident.response.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";

const IncidentsPage = () => {

    const [incidentResponses] = useSubscribe<IncidentResponse[]>("/incident/loadAll")
    const [loadIncidents] = usePublish("/load/incidents")

    useEffect(() => {
        loadIncidents("")
    }, []);

    return (
        <>
            <Split>
                {
                    incidentResponses ? (
                        incidentResponses.map((incidentResponses, key) => <IncidentSummary incidentResponse={incidentResponses} key={key}/>)
                    ) : (
                        <>
                            <Skeleton height={32}/>
                            <Skeleton height={32}/>
                            <Skeleton height={32}/>
                            <Skeleton height={32}/>
                        </>
                    )
                }
            </Split>
        </>
    )
}

export default IncidentsPage
