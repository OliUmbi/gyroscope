import {ReactNode} from "react-dom";

export interface ButtonProps {
  children: ReactNode,
  onClick: () => void,
  highlight: boolean
}
