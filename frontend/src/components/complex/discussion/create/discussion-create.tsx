import "./discussion-create.scss";
import {DiscussionCreateProps} from "./discussion-create.props.ts";
import Input from "../../../base/input/input.tsx";
import Button from "../../../base/button/button.tsx";
import Text from "../../../base/text/text.tsx";
import {useEffect, useState} from "react";
import {DiscussionCommentRequest} from "../../../../requests/discussion-comment.request.ts";
import {Method} from "../../../../enums/method.enum.ts";
import useApi from "../../../../hooks/use-api.ts";
import {IdResponse} from "../../../../responses/id.response.ts";

const DiscussionCreate = (props: DiscussionCreateProps) => {

    const [commentCreate, commentCreateData] = useApi<IdResponse>()

    const [body, setBody] = useState<string | null>(null)
    const [bodyMessage, setBodyMessage] = useState<string>("")

    useEffect(() => {
        if (commentCreateData) {
            clear()
            props.reload()
        }
    }, [commentCreateData]);

    const save = () => {
        setBodyMessage("")

        if (!body) {
            setBodyMessage("Comment is missing")
            return
        }

        const discussionCommentRequest: DiscussionCommentRequest = {
            discussionId: props.id,
            body: body
        }

        commentCreate("discussion/comment", Method.POST, undefined, discussionCommentRequest)
    }

    const clear = () => {
        setBody("")
    }

    return (
        <div className="discussion-create">
            <Input value={body} setValue={setBody} type="text" label="Comment" required={false} placeholder="What has happened, what acions were taken, new information, ..." message={bodyMessage} rows={4}/>
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
