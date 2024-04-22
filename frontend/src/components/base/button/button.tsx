import "./button.scss";
import {ButtonProps} from "./button.props.ts";

const Button = (props: ButtonProps) => {

  return (
      <button className={"button " + (props.highlight ? "highlight" : "")} onClick={() => props.onClick()}>{props.children}</button>
  )
}

export default Button;
