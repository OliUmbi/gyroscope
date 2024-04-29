import {ReactNode} from "react-dom";

export interface SkeletonProps {
    children?: ReactNode
    height?: number,
    width?: number,
    padding?: number
}