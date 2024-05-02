import ScheduleEditItem from "../../components/complex/schedule-edit/item/schedule-edit-item.tsx";
import {useEffect} from "react";
import Linear from "../../components/layout/linear/linear.tsx";
import useApi from "../../hooks/use-api.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import ScheduleEditShift from "../../components/complex/schedule-edit/shift/schedule-edit-shift.tsx";
import {Method} from "../../enums/method.enum.ts";
import useStorage from "../../hooks/use-storage.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";

const ScheduleEditPage = () => {

    const [profileId] = useStorage("profileId")
    const [profile, profileData] = useApi<ProfileResponse>()

    useEffect(() => {
        if (profileId) {
            profile("profile/" + profileId + "/schedule", Method.GET)
        }
    }, []);

    return (
        <>
            <Linear>
                {
                    profileData ? (
                        <>
                            <ScheduleEditShift/>
                            {
                                profileData.schedule.map((schedule, key) => <ScheduleEditItem schedule={schedule} key={key}/>)
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
