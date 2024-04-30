import Text from "../../components/base/text/text.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Button from "../../components/base/button/button.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import ProfileSession from "../../components/complex/profile/session/profile-session.tsx";
import SkeletonText from "../../components/base/skeleton-text/skeleton-text.tsx";

const ProfilePage = () => {

    const [profileResponse] = useSubscribe<ProfileResponse>("/profile/id")
    const [loadProfileSession] = usePublish("/profile/id")

    useEffect(() => {
        loadProfileSession("")
    }, []);

    return (
        <>
            <Linear>
                <Text type="s" mono={true} bold={false} highlight={false}>Details</Text>
                {
                    profileResponse ?
                        <Text type="h2" mono={false} bold={true} highlight={true}>{profileResponse.name}</Text> : <SkeletonText type="h2"/>
                }
                <Text type="s" mono={true} bold={false} highlight={false}>Actions</Text>
                <Button onClick={() => {}} highlight={false}>
                    <Text type="p" mono={false} bold={true} highlight={true}>Logout</Text>
                </Button>
                <Text type="s" mono={true} bold={false} highlight={false}>Sessions</Text>
                {
                    profileResponse ? (
                        profileResponse.sessions.map((session, key) => <ProfileSession session={session} key={key}/>)
                    ) : (
                        <Skeleton height={6}/>
                    )
                }
            </Linear>
        </>
    )
}

export default ProfilePage;
