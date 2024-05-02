import "./discussion-create.scss";
import {DiscussionCreateProps} from "./discussion-create.props.ts";
import Input from "../../../base/input/input.tsx";
import Button from "../../../base/button/button.tsx";
import Text from "../../../base/text/text.tsx";
import {useState} from "react";

const DiscussionCreate = (props: DiscussionCreateProps) => {

    const [body, setBody] = useState<string | null>(null)

    const save = () => {

    }

    const clear = () => {
        setBody("")
    }

    return (
        <div className="discussion-create">
            <Input value={body} setValue={setBody} type="text" label="Discussion" required={false} placeholder="What has happened, what acions were taken, new information, ..." message="" rows={4}/>
            <div className="discussion-create__actions">
                <Button onClick={clear} highlight={false}>
                    <Text type="p" mono={false} bold={true} highlight={true}>Clear</Text>
                </Button>
                <Button onClick={save} highlight={true}>
                    <Text type="p" mono={false} bold={true} highlight={true}>Save</Text>
                </Button>
            </div>
        </div>
    )
}

export default DiscussionCreate
