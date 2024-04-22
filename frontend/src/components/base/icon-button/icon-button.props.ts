import {ReactNode} from "react-dom";

export interface IconButtonProps {
  children: ReactNode,
  onClick: () => void,
  highlight: boolean
}
