import ProfileTimeline from "../../components/complex/profile/timeline/profile-timeline.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";

const ProfileSchedulePage = () => {

    const [profileResponses] = useSubscribe<ProfileResponse[]>("/profile/loadScheduleAll")
    const [loadProfileSchedules] = usePublish("/load/profileSchedules")

    useEffect(() => {
        loadProfileSchedules("")
    }, []);

    return (
        <>
            <Linear>
                {
                    profileResponses ? (
                        profileResponses.map((profileResponse, key) => <ProfileTimeline profileResponse={profileResponse} key={key}/>)
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

export default ProfileSchedulePage
