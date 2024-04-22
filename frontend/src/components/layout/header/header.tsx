import "./header.scss";
import {HeaderProps} from "./header.props.ts";
import Text from "../../base/text/text.tsx";
import Breadcrumbs from "../../base/breadcrumbs/breadcrumbs.tsx";

const Header = (props: HeaderProps) => {

    return (
        <header className="header">
            <Breadcrumbs/>
            <Text type="h1" mono={false} bold={true} highlight={true}>{props.title}</Text>
        </header>
    )
}

export default Header
