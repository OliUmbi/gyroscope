import "./comment.scss";
import Text from "../../base/text/text.tsx";
import Input from "../../base/input/input.tsx";
import Button from "../../base/button/button.tsx";

const Comment = () => {

    return (
        <div className="comment">
            <div className="comment__item">
                <div className="comment__head">
                    <Text type="p" mono={true} bold={true} highlight={true}>Umbricht</Text>
                    <Text type="s" mono={true} bold={false} highlight={false}>24.04.2024 16:56</Text>
                </div>
                <Text type="p" mono={true} bold={false} highlight={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo ut tellus vitae sodales. Vestibulum dignissim nec ante in auctor. Etiam eget sem sapien.</Text>
            </div>
            <div className="comment__item">
                <div className="comment__head">
                    <Text type="p" mono={true} bold={true} highlight={true}>Umbricht</Text>
                    <Text type="s" mono={true} bold={false} highlight={false}>24.04.2024 16:56</Text>
                </div>
                <Text type="p" mono={true} bold={false} highlight={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo ut tellus vitae sodales. Vestibulum dignissim nec ante in auctor. Etiam eget sem sapien.</Text>
            </div>
            <div className="comment__item">
                <div className="comment__head">
                    <Text type="p" mono={true} bold={true} highlight={true}>Umbricht</Text>
                    <Text type="s" mono={true} bold={false} highlight={false}>24.04.2024 16:56</Text>
                </div>
                <Text type="p" mono={true} bold={false} highlight={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo ut tellus vitae sodales. Vestibulum dignissim nec ante in auctor. Etiam eget sem sapien.</Text>
            </div>
            <div className="comment__item">
                <div className="comment__head">
                    <Text type="p" mono={true} bold={true} highlight={true}>Umbricht</Text>
                    <Text type="s" mono={true} bold={false} highlight={false}>24.04.2024 16:56</Text>
                </div>
                <div className="comment__body">
                    <Text type="p" mono={true} bold={false} highlight={true}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo ut tellus vitae sodales. Vestibulum dignissim nec ante in auctor. Etiam eget sem sapien.</Text>
                </div>
            </div>
            <div className="comment__add">
                <Input value={""} setValue={value => console.log(value)} type="text" label="Comment" required={false} placeholder="What has happened, what acions were taken, new information, ..." message="" rows={8}/>

                <div className="comment__actions">
                    <Button onClick={() => {}} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Delete</Text>
                    </Button>
                    <Button onClick={() => {}} highlight={true}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Save</Text>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Comment
