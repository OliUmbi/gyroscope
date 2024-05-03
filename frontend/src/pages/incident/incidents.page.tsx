import IncidentSummary from "../../components/complex/incident/summary/incident-summary.tsx";
import Split from "../../components/layout/split/split.tsx";
import useApi from "../../hooks/use-api.ts";
import {useEffect} from "react";
import {IncidentResponse} from "../../responses/incident.response.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {Method} from "../../enums/method.enum.ts";
import Error from "../../components/complex/error/error.tsx";

const IncidentsPage = () => {

    const [incidents, incidentsData, incidentsError] = useApi<IncidentResponse[]>()

    useEffect(() => {
        incidents("incident", Method.GET)
    }, []);

    return (
        <>
            <Error title="Failed to load incidents" message={incidentsError}/>
            <Split>
                {
                    incidentsData ? (
                        incidentsData.map((incidentsData, key) => <IncidentSummary incidentResponse={incidentsData} key={key}/>)
                    ) : (
                        <>
                            <Skeleton height={24}/>
                            <Skeleton height={24}/>
                            <Skeleton height={24}/>
                            <Skeleton height={24}/>
                            <Skeleton height={24}/>
                            <Skeleton height={24}/>
                        </>
                    )
                }
            </Split>
        </>
    )
}

export default IncidentsPage
