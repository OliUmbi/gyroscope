import Split from "../../components/layout/split/split.tsx";
import IncidentEditDetails from "../../components/complex/incident-edit/details/incident-edit-details.tsx";
import IncidentEditChecklist from "../../components/complex/incident-edit/checklist/incident-edit-checklist.tsx";
import Button from "../../components/base/button/button.tsx";
import Text from "../../components/base/text/text.tsx";

const IncidentEditPage = () => {

    return (
        <>
            <Split>
                <IncidentEditDetails/>
                <IncidentEditChecklist/>
            </Split>
            <Button onClick={() => {}} highlight={false}>
                <Text type="p" mono={false} bold={true} highlight={true}>Delete</Text>
            </Button>
        </>
    )
}

export default IncidentEditPage
