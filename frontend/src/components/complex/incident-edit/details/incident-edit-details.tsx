import "./incident-edit-details.scss";
import Input from "../../../base/input/input.tsx";
import Button from "../../../base/button/button.tsx";
import Text from "../../../base/text/text.tsx";

const IncidentEditDetails = () => {

    return (
        <div className="incident-edit-details">
            <Input value="" setValue={value => console.log(value)} type="text" label="Title" required={true} placeholder="Suspicious activity on service XYZ" message=""/>
            <Input value="" setValue={value => console.log(value)} type="text" label="Time" required={true} placeholder="2024.05.05 15:15" message=""/>
            <Input value="" setValue={value => console.log(value)} type="text" label="System" required={true} placeholder="Service XYZ" message=""/>

            <div className="incident-edit-details__group">
                <Text type="s" mono={true} bold={false} highlight={false}>Type</Text>
                <div className="incident-edit-details__options">
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Suspicion</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Attempt</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={true}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Attack</Text>
                    </Button>
                </div>
            </div>
            <div className="incident-edit-details__group">
                <Text type="s" mono={true} bold={false} highlight={false}>Severity</Text>
                <div className="incident-edit-details__options">
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Critical</Text>
                    </Button>
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
            <div className="incident-edit-details__group">
                <Text type="s" mono={true} bold={false} highlight={false}>Status</Text>
                <div className="incident-edit-details__options">
                    <Button onClick={() => {
                    }} highlight={true}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Open</Text>
                    </Button>
                    <Button onClick={() => {
                    }} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Closed</Text>
                    </Button>
                </div>
            </div>
            <div className="incident-edit-details__group">
                <Text type="s" mono={true} bold={false} highlight={false}>Assigned</Text>
                <div className="incident-edit-details__options">
                    <Button onClick={() => {}} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Unassigned</Text>
                    </Button>
                    <Button onClick={() => {}} highlight={true}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Loosli</Text>
                    </Button>
                    <Button onClick={() => {}} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Umbricht</Text>
                    </Button>
                    <Button onClick={() => {}} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Goudsmit</Text>
                    </Button>
                    <Button onClick={() => {}} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Minder</Text>
                    </Button>
                    <Button onClick={() => {}} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Knodracki</Text>
                    </Button>
                    <Button onClick={() => {}} highlight={false}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Leutenergger</Text>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default IncidentEditDetails
