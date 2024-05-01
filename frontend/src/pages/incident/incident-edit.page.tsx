import Split from "../../components/layout/split/split.tsx";
import IncidentEditDetails from "../../components/complex/incident-edit/details/incident-edit-details.tsx";
import IncidentEditChecklist from "../../components/complex/incident-edit/checklist/incident-edit-checklist.tsx";
import Button from "../../components/base/button/button.tsx";
import Text from "../../components/base/text/text.tsx";
import usePublish from "../../hooks/use-publish.ts";
import useSubscribe from "../../hooks/use-subscribe.ts";
import {useEffect} from "react";
import Linear from "../../components/layout/linear/linear.tsx";
import Input from "../../components/base/input/input.tsx";
import Select from "../../components/base/select/select.tsx";
import {IncidentType} from "../../enums/incident-type.enum.ts";
import {IncidentSeverity} from "../../enums/incident-severity.enum.ts";
import {IncidentStatus} from "../../enums/incident-status.enum.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {ProfileResponse} from "../../responses/profile.response.ts";

const IncidentEditPage = () => {

    const [profileResponses] = useSubscribe<ProfileResponse[]>("/profile")
    const [dashboardProfile] = usePublish("/profile")

    useEffect(() => {
        dashboardProfile("")
    }, []);

    return (
        <>
            <Split>
                <Input value="" setValue={value => console.log(value)} type="text" label="Title" required={true}
                       placeholder="Suspicious activity on service XYZ" message=""/>
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>Short and concise description of what has happened</Text>
                </Linear>
            </Split>
            <Split>
                <Input value="" setValue={value => console.log(value)} type="text" label="Time" required={true} placeholder="2024.05.05 15:15" message=""/>
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>Time the incident first occurred or was noticed</Text>
                </Linear>
            </Split>
            <Split>
                <Input value="" setValue={value => console.log(value)} type="text" label="System" required={true} placeholder="Service XYZ" message=""/>
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>Affected system or connections</Text>
                </Linear>
            </Split>
            <Split>
                <Select value={IncidentType.SUSPICION} setValue={() => {
                }} options={[
                    {name: "Attack", value: IncidentType.ATTACK},
                    {name: "Attempt", value: IncidentType.ATTEMPT},
                    {name: "Suspicion", value: IncidentType.SUSPICION}
                ]} label="Type" required={true} message=""/>
                <Linear>
                    <Split>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Attack</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Currently doing an attack on one of our system or succesful attack was
                                done [High, Critical]</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Attempt</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Monitoring has found weakness or entrypoint but no System has been
                                affected so far [malware is dormant for now]</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Suspicion</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Needs to be investigated</Text>
                        </div>
                    </Split>
                </Linear>
            </Split>
            <Split>
                <Select value={IncidentSeverity.MEDIUM} setValue={() => {}} options={[
                    {name: "Critical", value: IncidentSeverity.CRITICAL},
                    {name: "High", value: IncidentSeverity.HIGH},
                    {name: "Medium", value: IncidentSeverity.MEDIUM},
                    {name: "Low", value: IncidentSeverity.LOW}
                ]} label="Severity" required={true} message=""/>
                <Linear>
                    <Split>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Critical</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>several main systems are affected and or down [Shit is hitting the
                                fan]</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>High</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Investigation has found weakness/Entrypoint which needs to be fixed
                                ASAP</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Medium</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Start Investigation to see what is affected or false positive</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Low</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Investigate if we have time</Text>
                        </div>
                    </Split>
                </Linear>
            </Split>
            <Split>
                <Select value={IncidentStatus.OPEN} setValue={() => {}} options={[
                    {name: "Open", value: IncidentStatus.OPEN},
                    {name: "Closed", value: IncidentStatus.CLOSED}
                ]} label="Status" required={true} message=""/>
                <Linear>
                    <Split>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Open</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Incident is not resolved and actively investigated/mitigated</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Closed</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>All necessary actions have been taken and no further attention is needed</Text>
                        </div>
                    </Split>
                </Linear>
            </Split>
            <Split>
                {
                    profileResponses ? (
                        <Select value={null} setValue={() => {}} options={[{name: "Undefined", value: null}, ...profileResponses.map(value => {return {name: value.name, value: value.id}})]} label="Assigned" required={false} message=""/>
                    ) : (
                        <Skeleton height={32}/>
                    )
                }
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>The assignee is responsible for managing the incident, coordinating necessary actions, and communicating updates</Text>
                    <Text type="p" mono={false} bold={false} highlight={false}>Usually the monitoring team discovering it or team leader</Text>
                </Linear>
            </Split>
            <IncidentEditChecklist/>
            <Button onClick={() => actionDelete({test: "sdaf"})} highlight={false}>
                <Text type="p" mono={false} bold={true} highlight={true}>Delete</Text>
            </Button>
        </>
    )
}

export default IncidentEditPage
