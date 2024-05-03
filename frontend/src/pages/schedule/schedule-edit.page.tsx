import ScheduleUpdate from "../../components/complex/schedule/update/schedule-update.tsx";
import {useEffect} from "react";
import Linear from "../../components/layout/linear/linear.tsx";
import useApi from "../../hooks/use-api.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import ScheduleCreate from "../../components/complex/schedule/shift/schedule-create.tsx";
import {Method} from "../../enums/method.enum.ts";
import useStorage from "../../hooks/use-storage.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import Error from "../../components/complex/error/error.tsx";

const ScheduleEditPage = () => {

    const [profileId] = useStorage("profileId")
    const [schedules, schedulesData, schedulesError] = useApi<ProfileResponse>()

    useEffect(() => {
        if (profileId) {
            schedules("profile/" + profileId + "/schedule", Method.GET)
        }
    }, [])

    const reload = () => {
        if (profileId) {
            schedules("profile/" + profileId + "/schedule", Method.GET)
        }
    }


    return (
        <>
            <Error title="Failed to load schedule" message={schedulesError}/>
            <Linear>
                {
                    schedulesData && profileId ? (
                        <>
                            <ScheduleCreate id={profileId} reload={reload}/>
                            {
                                schedulesData.schedule.map((schedule, key) => <ScheduleUpdate schedule={schedule} reload={reload} key={key}/>)
                            }
                        </>
                    ) : (
                        <>
                            <Skeleton height={3.75}/>
                            <Skeleton height={3.75}/>
                            <Skeleton height={3.75}/>
                            <Skeleton height={3.75}/>
                            <Skeleton height={3.75}/>
                            <Skeleton height={3.75}/>
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
        </>
    )
}

export default ScheduleEditPage;
