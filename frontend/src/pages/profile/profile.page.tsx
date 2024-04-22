import Text from "../../components/base/text/text.tsx";
import Icon from "../../components/base/icon/icon.tsx";
import Button from "../../components/base/button/button.tsx";
import Profile from "../../components/complex/profile/profile.tsx";

const ProfilePage = () => {

    return (
        <>
            <Profile/>
            <div>
                <Button onClick={() => {}} highlight={true}>
                    <Text type="p" mono={false} bold={false} highlight={true}>Edit</Text>
                </Button>
                <Button onClick={() => {}} highlight={false}>
                    <Text type="p" mono={false} bold={false} highlight={true}>Change Password</Text>
                </Button>
                <Button onClick={() => {}} highlight={false}>
                    <Text type="p" mono={false} bold={false} highlight={true}>Logout</Text>
                </Button>
            </div>
        </>
    )
}

export default ProfilePage;
