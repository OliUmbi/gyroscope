import "./header.scss";
import {HeaderProps} from "./header.props.ts";
import Text from "../../base/text/text.tsx";
import Breadcrumbs from "../../base/breadcrumbs/breadcrumbs.tsx";
import Button from "../../base/button/button.tsx";
import {useNavigate} from "react-router-dom";

const Header = (props: HeaderProps) => {

    const navigate = useNavigate()

    return (
        <header className="header">
            <div>
                <Breadcrumbs/>
                <Text type="h1" mono={false} bold={true} highlight={true}>{props.title}</Text>
            </div>
            <div>
                {
                    props.actions.map((action, key) => (
                        <Button onClick={() => navigate(action.path)} highlight={key === props.actions.length - 1} key={key}>
                            <Text type="p" mono={false} bold={false} highlight={true}>{action.name}</Text>
                        </Button>
                    ))
                }
            </div>
        </header>
    )
}

export default Header
