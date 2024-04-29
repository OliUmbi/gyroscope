import Text from "../../components/base/text/text.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Split from "../../components/layout/split/split.tsx";
import Button from "../../components/base/button/button.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import {IdRequest} from "../../requests/id.request.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import ProfileSession from "../../components/complex/profile/session/profile-session.tsx";
import {k} from "vite/dist/node/types.d-jgA8ss1A";
import SkeletonText from "../../components/base/skeleton-text/skeleton-text.tsx";

const ProfilePage = () => {

    const [profileResponse] = useSubscribe<ProfileResponse>("/profile/loadId")
    const [loadProfile] = usePublish("/load/profile")

    useEffect(() => {
        let idRequest: IdRequest = {
            id: "aaaaaaa1-bbb1-cccc-dddd-eeeeeeeeeeee"
        }

        loadProfile(idRequest)
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
