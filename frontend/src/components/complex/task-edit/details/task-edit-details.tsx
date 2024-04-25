import "./task-edit-details.scss";
import Input from "../../../base/input/input.tsx";
import Button from "../../../base/button/button.tsx";
import Text from "../../../base/text/text.tsx";

const TaskEditDetails = () => {

    return (
        <div className="task-edit-details">
            <Input value="" setValue={value => console.log(value)} type="text" label="Title" required={true}
                   placeholder="Suspicious activity on service XYZ" message=""/>

            <div className="task-edit-details__group">
                <Text type="s" mono={true} bold={false} highlight={false}>Status</Text>
                <div className="task-edit-details__options">
                    <Button onClick={() => {
                    }} highlight={true}>
                        <Text type="p" mono={false} bold={true} highlight={true}>IDEA</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>TODO</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>ON_HOLD</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>IN_PROGRESS</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>DONE</Text>
                    </Button>
                </div>
            </div>
            <div className="task-edit-details__group">
                <Text type="s" mono={true} bold={false} highlight={false}>Priority</Text>
                <div className="task-edit-details__options">
                    <Button onClick={() => {
                    }} highlight={true}>
                        <Text type="p" mono={false} bold={true} highlight={true}>High</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Medium</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Low</Text>
                    </Button>
                </div>
            </div>
            <div className="task-edit-details__group">
                <Text type="s" mono={true} bold={false} highlight={false}>Assigned</Text>
                <div className="task-edit-details__options">
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Unassigned</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={true}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Loosli</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Umbricht</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Goudsmit</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Minder</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Knodracki</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Leutenergger</Text>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TaskEditDetails
