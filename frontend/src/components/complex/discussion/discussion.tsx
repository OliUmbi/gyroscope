import "./discussion.scss";
import {DiscussionProps} from "./discussion.props.ts";
import DiscussionComment from "./comment/discussion-comment.tsx";
import DiscussionCreate from "./create/discussion-create.tsx";

const Discussion = (props: DiscussionProps) => {

    return (
        <div className="discussion">
            {
                props.discussion.comments.map((comment, key) => <DiscussionComment comment={comment} key={key}/>)
            }

            <DiscussionCreate id={props.discussion.id}/>

        </div>
    )
}

export default Discussion
