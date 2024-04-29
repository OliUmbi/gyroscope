import "./skeleton-text.scss";
import {SkeletonTextProps} from "./skeleton-text.props.ts";

const SkeletonText = (props: SkeletonTextProps) => {

    const random = (): string => {
        let random = Math.random() * 50 + 10

        let placeholder = ""
        for (let i = 0; i < random; i++) {
            placeholder += "-"
        }

        return placeholder
    }

    switch (props.type) {
        case "h1":
            return (
                <h1 className="skeleton-text">{random()}</h1>
            );
        case "h2":
            return (
                <h2 className="skeleton-text">{random()}</h2>
            );
        case "h3":
            return (
                <h3 className="skeleton-text">{random()}</h3>
            );
        case "p":
            return (
                <p className="skeleton-text">{random()}</p>
            );
        case "s":
            return (
                <small className="skeleton-text">{random()}</small>
            );
    }
}

export default SkeletonText
