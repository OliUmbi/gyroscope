import "./discussion-comment.scss";
import {DiscussionCommentProps} from "./discussion-comment.props.ts";
import Text from "../../../base/text/text.tsx";
import {locale} from "../../../../utils/locale.util.ts";
import {dateConvert} from "../../../../utils/date.util.ts";

const DiscussionComment = (props: DiscussionCommentProps) => {

    return (
        <div className="discussion-comment">
            <div>
                <Text type="p" mono={true} bold={true} highlight={true}>{props.comment.profile.name}</Text>
                <Text type="s" mono={true} bold={false} highlight={false}>{locale(dateConvert(props.comment.created))}</Text>
            </div>
            <Text type="p" mono={true} bold={false} highlight={true}>{props.comment.body}</Text>
        </div>
    )
}

export default DiscussionComment
