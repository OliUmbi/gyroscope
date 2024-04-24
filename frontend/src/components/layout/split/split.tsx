import "./split.scss"
import {SplitProps} from "./split.props.ts";

const Split = (props: SplitProps) => {

    return (
        <div className="split">
            {props.children}
        </div>
    )
}

export default Split
