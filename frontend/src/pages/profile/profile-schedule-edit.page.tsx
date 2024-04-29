import ProfileEditSchedule from "../../components/complex/profile-edit/schedule/profile-edit-schedule.tsx";
import {useEffect} from "react";
import Linear from "../../components/layout/linear/linear.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import usePublish from "../../hooks/use-publish.ts";
import {IdRequest} from "../../requests/id.request.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import ProfileEditShift from "../../components/complex/profile-edit/shift/profile-edit-shift.tsx";

const ProfileScheduleEditPage = () => {

    const [profileResponse] = useSubscribe<ProfileResponse>("/profile/loadScheduleId")
    const [loadProfileSchedule] = usePublish("/load/profileSchedule")

    useEffect(() => {
        loadProfileSchedule("")
    }, []);

    return (
        <>
            <Linear>
                {
                    profileResponse ? (
                        <>
                            <ProfileEditShift/>
                            {
                                profileResponse.schedule.map((schedule, key) => <ProfileEditSchedule schedule={schedule} key={key}/>)
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

export default ProfileScheduleEditPage;
