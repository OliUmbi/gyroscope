import ScheduleTimeline from "../../components/complex/schedule/timeline/schedule-timeline.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import {ProfileResponse} from "../../responses/profile.response.ts";
import useApi from "../../hooks/use-api.ts";
import {useEffect} from "react";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {Method} from "../../enums/method.enum.ts";
import Error from "../../components/complex/error/error.tsx";

const SchedulePage = () => {

    const [profiles, profilesData, profilesError] = useApi<ProfileResponse[]>()

    useEffect(() => {
        profiles("profile/schedule", Method.GET)
    }, []);

    return (
        <>
            <Error title="Failed to load profiles" message={profilesError}/>
            <Linear>
                {
                    profilesData ? (
                        profilesData.map((profileResponse, key) => <ScheduleTimeline profileResponse={profileResponse} key={key}/>)
                    ) : (
                        <>
                            <Skeleton height={6}/>
                            <Skeleton height={6}/>
                            <Skeleton height={6}/>
                            <Skeleton height={6}/>
                            <Skeleton height={6}/>
                            <Skeleton height={6}/>
                            <Skeleton height={6}/>
                            <Skeleton height={6}/>
                        </>
                    )
                }
            </Linear>
        </>
    )
}

export default SchedulePage
