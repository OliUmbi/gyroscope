import "./incident-edit-details.scss";
import Input from "../../../base/input/input.tsx";
import Button from "../../../base/button/button.tsx";
import Text from "../../../base/text/text.tsx";

const IncidentEditDetails = () => {

    return (
        <div className="incident-edit-details">

            <div className="incident-edit-details__group">

            </div>
            <div className="incident-edit-details__group">

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
