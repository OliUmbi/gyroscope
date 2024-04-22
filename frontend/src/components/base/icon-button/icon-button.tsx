import "./icon-button.scss";
import {IconButtonProps} from "./icon-button.props.ts";
import Icon from "../icon/icon.tsx";

const IconButton = (props: IconButtonProps) => {

  return (
      <button className={"icon-button " + (props.highlight ? "highlight" : "")} onClick={() => props.onClick()}>
        <Icon>{props.children}</Icon>
      </button>
  )
}

export default IconButton;
