import ScheduleEditItem from "../../components/complex/schedule-edit/item/schedule-edit-item.tsx";
import {useEffect} from "react";
import Linear from "../../components/layout/linear/linear.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import usePublish from "../../hooks/use-publish.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import ScheduleEditShift from "../../components/complex/schedule-edit/shift/schedule-edit-shift.tsx";

const ScheduleEditPage = () => {

    const [profileResponse] = useSubscribe<ProfileResponse>("/profile/schedule/id")
    const [loadProfileSchedule] = usePublish("/profile/schedule/id")

    useEffect(() => {
        loadProfileSchedule("")
    }, []);

    return (
        <>
            <Linear>
                {
                    profileResponse ? (
                        <>
                            <ScheduleEditShift/>
                            {
                                profileResponse.schedule.map((schedule, key) => <ScheduleEditItem schedule={schedule} key={key}/>)
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
