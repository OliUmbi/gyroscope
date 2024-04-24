import "./linear.scss"
import {LinearProps} from "./linear.props.ts";

const Linear = (props: LinearProps) => {

    return (
        <div className="linear">
            {props.children}
        </div>
    )
}

export default Linear
