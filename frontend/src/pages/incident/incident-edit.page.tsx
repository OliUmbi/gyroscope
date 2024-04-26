import Split from "../../components/layout/split/split.tsx";
import IncidentEditDetails from "../../components/complex/incident-edit/details/incident-edit-details.tsx";
import IncidentEditChecklist from "../../components/complex/incident-edit/checklist/incident-edit-checklist.tsx";
import Button from "../../components/base/button/button.tsx";
import Text from "../../components/base/text/text.tsx";
import usePublish from "../../hooks/use-publish.ts";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {useEffect} from "react";

interface Test {
    message: string
}

const IncidentEditPage = () => {

    const [valueSuccess] = useSubscribe<Test>("/authentication/success")
    const [actionDelete] = usePublish("/action/login")

    useEffect(() => {
        console.log(valueSuccess)
    }, []);

    return (
        <>
            <Split>
                <IncidentEditDetails/>
                <IncidentEditChecklist/>
            </Split>
            <Button onClick={() => actionDelete({test: "sdaf"})} highlight={false}>
                <Text type="p" mono={false} bold={true} highlight={true}>Delete</Text>
            </Button>
        </>
    )
}

export default IncidentEditPage
