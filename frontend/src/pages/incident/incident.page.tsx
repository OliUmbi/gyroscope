import Text from "../../components/base/text/text.tsx";
import IncidentCheck from "../../components/complex/incident/check/incident-check.tsx";
import Comment from "../../components/complex/comment/comment.tsx";
import IncidentDetail from "../../components/complex/incident/detail/incident-detail.tsx";
import Split from "../../components/layout/split/split.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {IncidentResponse} from "../../responses/incident.response.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import {IdRequest} from "../../requests/id.request.ts";
import {useParams} from "react-router-dom";
import SkeletonText from "../../components/base/skeleton-text/skeleton-text.tsx";
import {locale} from "../../utils/locale.util.ts";
import {dateConvert} from "../../utils/date.util.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import incidentDetail from "../../components/complex/incident/detail/incident-detail.tsx";
import {k} from "vite/dist/node/types.d-jgA8ss1A";

const IncidentPage = () => {

    let {id} = useParams();
    const [incidentResponse] = useSubscribe<IncidentResponse>("/incident/loadId")
    const [loadIncidents] = usePublish("/load/incident")

    useEffect(() => {
        if (id) {
            let idRequest: IdRequest = {
                id: id
            }

            loadIncidents(idRequest)
        }
    }, [id]);

    return (
        <>
            <Linear>
                <div>
                    {
                        incidentResponse ? (
                            <Text type="s" mono={true} bold={false} highlight={false}>{locale(dateConvert(incidentResponse.time))}</Text>
                        ) : (
                            <SkeletonText type="s"/>
                        )
                    }
                    {
                        incidentResponse ? (
                            <Text type="h2" mono={false} bold={true} highlight={true}>{incidentResponse.title}</Text>
                        ) : (
                            <SkeletonText type="h2"/>
                        )
                    }
                </div>
                <Split>
                    <Split>
                        {
                            incidentResponse ? (
                                <>
                                    <IncidentDetail name="Status" value={incidentResponse.status}/>
                                    <IncidentDetail name="Severity" value={incidentResponse.severity}/>
                                    <IncidentDetail name="Type" value={incidentResponse.type}/>
                                    <IncidentDetail name="System" value={incidentResponse.system}/>
                                    <IncidentDetail name="Assignee" value={incidentResponse.assignee.name}/>
                                    <IncidentDetail name="Creator" value={incidentResponse.creator.name}/>
                                    <IncidentDetail name="Created" value={locale(dateConvert(incidentResponse.created))}/>
                                    <IncidentDetail name="Updated" value={locale(dateConvert(incidentResponse.updated))}/>
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
                            incidentResponse ? (
                                incidentResponse.checks.map((check, key) => <IncidentCheck check={check} key={key}/>)
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
                <Comment/>
            </Linear>
        </>
    )
}

export default IncidentPage
