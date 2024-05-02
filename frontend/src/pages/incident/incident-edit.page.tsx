import Split from "../../components/layout/split/split.tsx";
import IncidentEditCheck from "../../components/complex/incident-edit/check/incident-edit-check.tsx";
import Button from "../../components/base/button/button.tsx";
import Text from "../../components/base/text/text.tsx";
import useApi from "../../hooks/use-api.ts";
import {useEffect, useState} from "react";
import Linear from "../../components/layout/linear/linear.tsx";
import Input from "../../components/base/input/input.tsx";
import Select from "../../components/base/select/select.tsx";
import {IncidentType} from "../../enums/incident-type.enum.ts";
import {IncidentSeverity} from "../../enums/incident-severity.enum.ts";
import {IncidentStatus} from "../../enums/incident-status.enum.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {ProfileResponse} from "../../responses/profile.response.ts";
import {Method} from "../../enums/method.enum.ts";
import {useNavigate, useParams} from "react-router-dom";
import {IncidentResponse} from "../../responses/incident.response.ts";
import {dateConvert, dateParse, dateValid} from "../../utils/date.util.ts";
import {locale} from "../../utils/locale.util.ts";
import {IncidentCheckRequest} from "../../requests/incident-check.request.ts";
import IconButton from "../../components/base/icon-button/icon-button.tsx";
import {IncidentRequest} from "../../requests/incident.request.ts";

const IncidentEditPage = () => {

    const {id} = useParams()
    const navigate = useNavigate();

    const [incident, incidentData] = useApi<IncidentResponse>()
    const [incidentCreate, incidentCreateData] = useApi<IdResponse>()
    const [incidentUpdate, incidentUpdateData] = useApi<MessageResponse>()
    const [incidentDelete, incidentDeleteData] = useApi<MessageResponse>()
    const [profiles, profilesData] = useApi<ProfileResponse[]>()

    const [title, setTitle] = useState<string | null>(null)
    const [titleMessage, setTitleMessage] = useState<string>("")
    const [time, setTime] = useState<string | null>(null)
    const [timeMessage, setTimeMessage] = useState<string>("")
    const [system, setSystem] = useState<string | null>(null)
    const [systemMessage, setSystemMessage] = useState<string>("")
    const [type, setType] = useState<IncidentType | null>(null)
    const [severity, setSeverity] = useState<IncidentSeverity | null>(null)
    const [status, setStatus] = useState<IncidentStatus | null>(null)
    const [assignee, setAssignee] = useState<string | null>(null)
    const [checks, setChecks] = useState<IncidentCheckRequest[]>([])
    const [saveMessage, setSaveMessage] = useState<string>("")

    useEffect(() => {
        profiles("profile", Method.GET)
    }, []);

    useEffect(() => {
        if (id) {
            if (id === "new") {
                return
            }

            incident("incident/" + id, Method.GET)
        }
    }, [id]);

    useEffect(() => {
        if (incidentData) {
            setTitle(incidentData.title)
            setTime(locale(dateConvert(incidentData.time)))
            setSystem(incidentData.system)
            setType(incidentData.type)
            setSeverity(incidentData.severity)
            setStatus(incidentData.status)
            setAssignee(incidentData.assignee ? incidentData.assignee.id : null)
            setChecks(incidentData.checks.map(value => {return {value: value.value, checked: value.checked}}))
        }
    }, [incidentData]);

    useEffect(() => {
        if (incidentCreateData) {
            navigate("/incidents/" + incidentCreateData.id)
        }
        if (incidentUpdateData) {
            navigate("/incidents/" + id)
        }
        if (incidentDeleteData) {
            navigate("/incidents")
        }
    }, [incidentCreateData, incidentUpdateData, incidentDeleteData]);

    useEffect(() => {
        if (title) {
            setTitleMessage(title.length + "/128")
        } else {
            setTitleMessage("0/128")
        }
    }, [title])

    useEffect(() => {
        if (time) {
            if (!dateValid(time)) {
                setTimeMessage("Invalid format, correct: 00.00.0000, 00:00")
            } else {
                setTimeMessage("")
            }
        }
    }, [time])

    useEffect(() => {
        if (system) {
            setSystemMessage(system.length + "/64")
        } else {
            setSystemMessage("0/128")
        }
    }, [system])

    const save = () => {
        setSaveMessage("")

        if (!title) {
            setSaveMessage("Title is missing")
            return
        }
        if (title.length > 128) {
            setSaveMessage("Title is too long")
            return
        }
        if (!time) {
            setSaveMessage("Time is missing")
            return
        }
        if (!dateValid(time)) {
            setSaveMessage("Time is not in the correct format")
            return
        }
        if (!system) {
            setSaveMessage("System is missing")
            return
        }
        if (system.length > 64) {
            setSaveMessage("System is too long")
            return
        }
        if (!status) {
            setSaveMessage("Status is missing")
            return
        }
        if (!severity) {
            setSaveMessage("Severity is missing")
            return
        }
        if (!type) {
            setSaveMessage("Type is missing")
            return
        }
        for (const check of checks) {
            if (!check.value) {
                setSaveMessage("Check is empty")
                return;
            }
            if (check.value.length > 64) {
                setSaveMessage("Check is too long")
                return;
            }
        }

        const incidentRequest: IncidentRequest = {
            assignee: assignee,
            title: title,
            system: system,
            time: dateParse(time).toISOString(),
            status: status,
            severity: severity,
            type: type,
            checks: checks
        }

        if (id === "new") {
            incidentCreate("incident", Method.POST, undefined, incidentRequest)
        } else {
            incidentUpdate("incident/" + id, Method.PUT, undefined, incidentRequest)
        }
    }

    const remove = () => {
        incidentDelete("incident/" + id, Method.DELETE)
    }

    const addCheck = () => {
        const next = [...checks]
        next.push({
            value: "",
            checked: false
        })
        setChecks(next)
    }

    const updateCheck = (key: number, value: IncidentCheckRequest) => {
        const next = [...checks]
        next[key] = value
        setChecks(next)
    }

    const removeCheck = (key: number) => {
        const next = [...checks]
        next.splice(key, 1)
        setChecks(next)
    }

    return (
        <>
            <Split>
                <Input value={title} setValue={setTitle} type="text" label="Title" required={true} placeholder="Suspicious activity on service XYZ" message={titleMessage}/>
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>Short and concise description of what has happened</Text>
                </Linear>
            </Split>
            <Split>
                <Input value={time} setValue={setTime} type="text" label="Time" required={true} placeholder="05.05.2024, 15:15" message={timeMessage}/>
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>Time the incident first occurred or was noticed</Text>
                </Linear>
            </Split>
            <Split>
                <Input value={system} setValue={setSystem} type="text" label="System" required={true} placeholder="Service XYZ" message={systemMessage}/>
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>Affected system or connections</Text>
                </Linear>
            </Split>
            <Split>
                <Select value={type} setValue={setType} options={[
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
                <Select value={severity} setValue={setSeverity} options={[
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
                <Select value={status} setValue={setStatus} options={[
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
                            <Text type="p" mono={false} bold={false} highlight={false}>All necessary actions have been taken and no further attention is
                                needed</Text>
                        </div>
                    </Split>
                </Linear>
            </Split>
            <Split>
                {
                    profilesData ? (
                        <Select value={assignee} setValue={setAssignee} options={[{name: "Undefined", value: null}, ...profilesData.map(value => {
                            return {name: value.name, value: value.id}
                        })]} label="Assigned" required={false} message=""/>
                    ) : (
                        <Skeleton height={32}/>
                    )
                }
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>The assignee is responsible for managing the incident, coordinating necessary
                        actions, and communicating updates</Text>
                    <Text type="p" mono={false} bold={false} highlight={false}>Usually the monitoring team discovering it or team leader</Text>
                </Linear>
            </Split>
            <Linear>
                {
                    checks.map((check, key) => <IncidentEditCheck value={check} setValue={value => updateCheck(key, value)} remove={() => removeCheck(key)} key={key}/>)
                }
                <IconButton onClick={addCheck} highlight={false}>add</IconButton>
            </Linear>
            <Linear>
                <div>
                    {
                        id ? (
                            <Button onClick={remove} highlight={false}>
                                <Text type="p" mono={false} bold={true} highlight={true}>Delete</Text>
                            </Button>
                        ) : null
                    }
                    <Button onClick={save} highlight={true}>
                        <Text type="p" mono={false} bold={true} highlight={true}>Save</Text>
                    </Button>
                </div>
                <Text type="s" mono={false} bold={false} highlight={false}>{saveMessage}</Text>
            </Linear>
        </>
    )
}

export default IncidentEditPage
