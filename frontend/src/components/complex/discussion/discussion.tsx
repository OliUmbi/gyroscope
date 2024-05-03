import "./discussion.scss";
import {DiscussionProps} from "./discussion.props.ts";
import DiscussionComment from "./comment/discussion-comment.tsx";
import DiscussionCreate from "./create/discussion-create.tsx";
import useApi from "../../../hooks/use-api.ts";
import {useEffect} from "react";
import {Method} from "../../../enums/method.enum.ts";
import Skeleton from "../../base/skeleton/skeleton.tsx";
import {DiscussionResponse} from "../../../responses/discussion.response.ts";
import Error from "../error/error.tsx";

const Discussion = (props: DiscussionProps) => {

    const [discussion, discussionData, discussionError] = useApi<DiscussionResponse>()

    useEffect(() => {
        discussion("discussion/" + props.id, Method.GET)
    }, []);

    const reload = () => {
        discussion("discussion/" + props.id, Method.GET)
    }

    return (
        <div className="discussion">
            {
                discussionData ? (
                    discussionData.comments.map((comment, key) => <DiscussionComment comment={comment} key={key}/>)
                ) : (
                    <Skeleton height={16}/>
                )
            }
            <Error title="Failed to load discussion" message={discussionError}/>
            <DiscussionCreate id={props.id} reload={reload}/>
        </div>
    )
}

export default Discussion
