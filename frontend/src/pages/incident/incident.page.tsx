import Text from "../../components/base/text/text.tsx";
import IncidentChecklist from "../../components/complex/incident/checklist/incident-checklist.tsx";
import Comment from "../../components/complex/comment/comment.tsx";
import IncidentDetails from "../../components/complex/incident/details/incident-details.tsx";
import Split from "../../components/layout/split/split.tsx";
import Linear from "../../components/layout/linear/linear.tsx";

const IncidentPage = () => {

    return (
        <>
            <Linear>
                <div>
                    <Text type="s" mono={true} bold={false} highlight={false}>24.04.2024 15:02</Text>
                    <Text type="h2" mono={false} bold={true} highlight={true}>Strange port with suspicious traffic</Text>
                </div>
                <Split>
                    <IncidentDetails/>
                    <IncidentChecklist/>
                </Split>
            </Linear>
            <Linear>
                <Comment/>
            </Linear>
        </>
    )
}

export default IncidentPage
