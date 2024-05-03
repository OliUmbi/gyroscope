import Text from "../../components/base/text/text.tsx";
import IncidentCheck from "../../components/complex/incident/check/incident-check.tsx";
import Discussion from "../../components/complex/discussion/discussion.tsx";
import IncidentDetail from "../../components/complex/incident/detail/incident-detail.tsx";
import Split from "../../components/layout/split/split.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import useApi from "../../hooks/use-api.ts";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import SkeletonText from "../../components/base/skeleton-text/skeleton-text.tsx";
import {locale} from "../../utils/locale.util.ts";
import {dateConvert} from "../../utils/date.util.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {IncidentResponse} from "../../responses/incident.response.ts";
import {Method} from "../../enums/method.enum.ts";
import Error from "../../components/complex/error/error.tsx";

const IncidentPage = () => {

    let {id} = useParams();
    const [incident, incidentData, incidentError] = useApi<IncidentResponse>()

    useEffect(() => {
        if (id) {
            incident("incident/" + id, Method.GET)
        }
    }, [id]);

    const reload = () => {
        incident("incident/" + id, Method.GET)
    }

    return (
        <>
            <Error title="Failed to load incident" message={incidentError}/>
            <Linear>
                <div>
                    {
                        incidentData ? (
                            <Text type="s" mono={true} bold={false} highlight={false}>{locale(dateConvert(incidentData.time))}</Text>
                        ) : (
                            <SkeletonText type="s"/>
                        )
                    }
                    {
                        incidentData ? (
                            <Text type="h2" mono={false} bold={true} highlight={true}>{incidentData.title}</Text>
                        ) : (
                            <SkeletonText type="h2"/>
                        )
                    }
                </div>
                <Split>
                    <Split>
                        {
                            incidentData ? (
                                <>
                                    <IncidentDetail name="Status" value={incidentData.status}/>
                                    <IncidentDetail name="Severity" value={incidentData.severity}/>
                                    <IncidentDetail name="Type" value={incidentData.type}/>
                                    <IncidentDetail name="System" value={incidentData.system}/>
                                    <IncidentDetail name="Assignee" value={incidentData.assignee ? incidentData.assignee.name : "Undefined"}/>
                                    <IncidentDetail name="Creator" value={incidentData.creator.name}/>
                                    <IncidentDetail name="Created" value={locale(dateConvert(incidentData.created))}/>
                                    <IncidentDetail name="Updated" value={locale(dateConvert(incidentData.updated))}/>
                                </>
                            ) : (
                                <>
                                    <Skeleton/>
                                    <Skeleton/>
                                    <Skeleton/>
                                    <Skeleton/>
                                    <Skeleton/>
                                    <Skeleton/>
                                    <Skeleton/>
                                    <Skeleton/>
                                </>
                            )
                        }
                    </Split>
                    <Linear>
                        {
                            incidentData ? (
                                incidentData.checks.map((check, key) => <IncidentCheck check={check} reload={reload} key={key}/>)
                            ) : (
                                <>
                                    <Skeleton height={3.75}/>
                                    <Skeleton height={3.75}/>
                                    <Skeleton height={3.75}/>
                                    <Skeleton height={3.75}/>
                                    <Skeleton height={3.75}/>
                                    <Skeleton height={3.75}/>
                                </>
                            )
                        }
                    </Linear>
                </Split>
            </Linear>
            <Linear>
                {
                    incidentData ? (
                        <Discussion id={incidentData.discussionId}/>
                    ) : (
                        <Skeleton height={32}/>
                    )
                }
            </Linear>
        </>
    )
}

export default IncidentPage
