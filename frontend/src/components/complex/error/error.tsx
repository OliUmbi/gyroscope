import "./error.scss";
import Text from "../../base/text/text.tsx";
import {ErrorProps} from "./error.props.ts";
import Icon from "../../base/icon/icon.tsx";

const Error = (props: ErrorProps) => {

    return (
        <div className="error" style={{display: props.message ? "" : "none"}}>
            <Icon>warning</Icon>
            <div>
                <Text type="p" mono={false} bold={true} highlight={true}>{props.title}</Text>
                <Text type="s" mono={true} bold={false} highlight={false}>{props.message}</Text>
            </div>
        </div>
    )
}

export default Error
