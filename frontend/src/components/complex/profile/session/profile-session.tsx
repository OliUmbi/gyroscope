import "./profile-session.scss"
import {ProfileSessionProps} from "./profile-session.props.ts";
import Text from "../../../base/text/text.tsx";
import {dateConvert} from "../../../../utils/date.util.ts";
import {locale} from "../../../../utils/locale.util.ts";

const ProfileSession = (props: ProfileSessionProps) => {

    return (
        <div className="profile-session">
            <div>
                <Text type="s" mono={true} bold={false} highlight={false}>Created</Text>
                <Text type="p" mono={false} bold={true} highlight={true}>{locale(dateConvert(props.session.created))}</Text>
            </div>
            <div>
                <Text type="s" mono={true} bold={false} highlight={false}>Expires</Text>
                <Text type="p" mono={false} bold={true} highlight={true}>{locale(dateConvert(props.session.expires))}</Text>
            </div>
        </div>
    )
}

export default ProfileSession
