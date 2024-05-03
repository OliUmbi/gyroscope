import Text from "../../components/base/text/text.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Button from "../../components/base/button/button.tsx";
import {ProfileResponse} from "../../responses/profile.response.ts";
import useApi from "../../hooks/use-api.ts";
import {useEffect} from "react";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import ProfileSession from "../../components/complex/profile/session/profile-session.tsx";
import SkeletonText from "../../components/base/skeleton-text/skeleton-text.tsx";
import useStorage from "../../hooks/use-storage.ts";
import {Method} from "../../enums/method.enum.ts";
import {storage} from "../../services/storage.ts";
import {useNavigate} from "react-router-dom";
import Error from "../../components/complex/error/error.tsx";

const ProfilePage = () => {

    const navigate = useNavigate()

    const [profileId] = useStorage("profileId")
    const [profile, profileData, profileError] = useApi<ProfileResponse>()

    useEffect(() => {
        if (profileId) {
            profile("profile/" + profileId + "/session", Method.GET)
        }
    }, []);

    const logout = () => {
        storage.remove("profileId")
        storage.remove("token")
        storage.remove("expires")
        navigate("/login")
    }

    return (
        <>
            <Error title="Failed to load profile" message={profileError}/>
            <Linear>
                <Text type="s" mono={true} bold={false} highlight={false}>Details</Text>
                {
                    profileData ?
                        <Text type="h2" mono={false} bold={true} highlight={true}>{profileData.name}</Text> : <SkeletonText type="h2"/>
                }
                <Text type="s" mono={true} bold={false} highlight={false}>Actions</Text>
                <Button onClick={logout} highlight={false}>
                    <Text type="p" mono={false} bold={true} highlight={true}>Logout</Text>
                </Button>
                <Text type="s" mono={true} bold={false} highlight={false}>Sessions</Text>
                {
                    profileData ? (
                        profileData.sessions.map((session, key) => <ProfileSession session={session} key={key}/>)
                    ) : (
                        <Skeleton height={6}/>
                    )
                }
            </Linear>
        </>
    )
}

export default ProfilePage;
