import "./content.scss";
import {ContentProps} from "./content.props.ts";

const Content = (props: ContentProps) => {

    return (
        <main className="content">
            {props.children}
        </main>
    )
}

export default Content;
