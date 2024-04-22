import "./content.scss";
import {ContentProps} from "./content.props.ts";
import useSignal from "../../../hooks/use-signal.ts";

const Content = (props: ContentProps) => {

    const [navigation, ] = useSignal<boolean>("navigation", true);

  return (
      <main className={"content " + (navigation ? "open" : "")}>
        {props.children}
      </main>
  )
}

export default Content;
