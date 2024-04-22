import "./icon.scss";
import {IconProps} from "./icon.props.ts";

const Icon = (props: IconProps) => {

  return (
      <div className="icon">{props.children}</div>
  )
}

export default Icon;
