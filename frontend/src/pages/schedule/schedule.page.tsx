import ScheduleTimeline from "../../components/complex/schedule/timeline/schedule-timeline.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";

const SchedulePage = () => {

    const [profileResponses] = useSubscribe<ProfileResponse[]>("/profile/schedule")
    const [loadProfileSchedules] = usePublish("/profile/schedule")

    useEffect(() => {
        loadProfileSchedules("")
    }, []);

    return (
        <>
            <Linear>
                {
                    profileResponses ? (
                        profileResponses.map((profileResponse, key) => <ScheduleTimeline profileResponse={profileResponse} key={key}/>)
                    ) : (
                        <>
                            <Skeleton height={6}/>
                        </>
                    )
                }
            </Linear>
        </>
    )
}

export default SchedulePage
