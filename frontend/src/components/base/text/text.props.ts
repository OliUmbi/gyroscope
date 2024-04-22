import {ReactNode} from "react-dom";

export interface TextProps {
    children: ReactNode,
    type: "h1" | "h2" | "h3" | "p" | "s",
    mono: boolean,
    bold: boolean,
    highlight: boolean,
}