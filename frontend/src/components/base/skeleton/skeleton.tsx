import "./skeleton.scss";
import {SkeletonProps} from "./skeleton.props.ts";

const Skeleton = (props: SkeletonProps) => {

    const width = (): string => {
        if (props.width) {
            return props.width + "rem"
        }

        return "100%"
    }

    const height = (): string => {
        if (props.height) {
            return props.height + "rem"
        }

        return "100%"
    }

    const padding = (): string => {
        if (props.padding) {
            return props.padding + "rem"
        }

        return "0"
    }

    return (
        <div className="skeleton" style={{width: width(), height: height(), padding: padding()}}>
            {props.children}
        </div>
    )
}

export default Skeleton
