import "./discussion-create.scss";
import {DiscussionCreateProps} from "./discussion-create.props.ts";
import Input from "../../../base/input/input.tsx";
import Button from "../../../base/button/button.tsx";
import Text from "../../../base/text/text.tsx";

const DiscussionCreate = (props: DiscussionCreateProps) => {

    return (
        <div className="discussion-create">
            <Input value={""} setValue={value => console.log(value)} type="text" label="Discussion" required={false} placeholder="What has happened, what acions were taken, new information, ..." message="" rows={4}/>

            <div className="discussion-create__actions">
                <Button onClick={() => {}} highlight={false}>
                    <Text type="p" mono={false} bold={true} highlight={true}>Delete</Text>
                </Button>
                <Button onClick={() => {}} highlight={true}>
                    <Text type="p" mono={false} bold={true} highlight={true}>Save</Text>
                </Button>
            </div>
        </div>
    )
}

export default DiscussionCreate
