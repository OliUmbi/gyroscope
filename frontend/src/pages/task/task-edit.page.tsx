import Button from "../../components/base/button/button.tsx";
import Text from "../../components/base/text/text.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Select from "../../components/base/select/select.tsx";
import {TaskStatus} from "../../enums/task-status.enum.ts";
import Input from "../../components/base/input/input.tsx";
import {TaskPriority} from "../../enums/task-priority.enum.ts";
import Split from "../../components/layout/split/split.tsx";
import useApi from "../../hooks/use-api.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import {useEffect, useState} from "react";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {Method} from "../../enums/method.enum.ts";
import {IdResponse} from "../../responses/id.response.ts";
import {MessageResponse} from "../../responses/message.response.ts";
import {useNavigate, useParams} from "react-router-dom";
import {TaskRequest} from "../../requests/task.request.ts";
import Error from "../../components/complex/error/error.tsx";
import {TaskResponse} from "../../responses/task.response.ts";

const TaskEditPage = () => {

    const {id} = useParams()
    const navigate = useNavigate();

    const [task, taskData, taskError] = useApi<TaskResponse>()
    const [taskCreate, taskCreateData, taskCreateError] = useApi<IdResponse>()
    const [taskUpdate, taskUpdateData, taskUpdateError] = useApi<MessageResponse>()
    const [taskDelete, taskDeleteData, taskDeleteError] = useApi<MessageResponse>()
    const [profiles, profilesData, profilesError] = useApi<ProfileResponse[]>()

    const [title, setTitle] = useState<string | null>(null)
    const [titleMessage, setTitleMessage] = useState<string>("")
    const [status, setStatus] = useState<TaskStatus | null>(null)
    const [priority, setPriority] = useState<TaskPriority | null>(null)
    const [assignee, setAssignee] = useState<string | null>(null)
    const [saveMessage, setSaveMessage] = useState<string>("")

    useEffect(() => {
        profiles("profile", Method.GET)
    }, []);

    useEffect(() => {
        if (id) {
            if (id === "new") {
                return
            }

            task("task/" + id, Method.GET)
        }
    }, [id]);

    useEffect(() => {
        if (taskData) {
            setTitle(taskData.title)
            setStatus(taskData.status)
            setPriority(taskData.priority)
            setAssignee(taskData.assignee ? taskData.assignee.id : null)
        }
    }, [taskData]);

    useEffect(() => {
        if (taskCreateData) {
            navigate("/tasks/" + taskCreateData.id)
        }
        if (taskUpdateData) {
            navigate("/tasks/" + id)
        }
        if (taskDeleteData) {
            navigate("/tasks")
        }
    }, [taskCreateData, taskUpdateData, taskDeleteData]);

    useEffect(() => {
        if (title) {
            setTitleMessage(title.length + "/128")
        } else {
            setTitleMessage("0/128")
        }
    }, [title])

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
        if (!status) {
            setSaveMessage("Status is missing")
            return
        }
        if (!priority) {
            setSaveMessage("Severity is missing")
            return
        }

        const taskRequest: TaskRequest = {
            assignee: assignee,
            title: title,
            status: status,
            priority: priority
        }

        if (id === "new") {
            taskCreate("task", Method.POST, undefined, taskRequest)
        } else {
            taskUpdate("task/" + id, Method.PUT, undefined, taskRequest)
        }
    }

    const remove = () => {
        taskDelete("task/" + id, Method.DELETE)
    }

    return (
        <>
            <Error title="Failed to load task" message={taskError}/>
            <Split>
                <Input value={title} setValue={setTitle} type="text" label="Title" required={true} placeholder="Suspicious activity on service XYZ" message={titleMessage}/>
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>Short and concise description of what has to be done</Text>
                </Linear>
            </Split>
            <Split>
                <Select value={status} setValue={setStatus} options={[
                    { name: "Idea", value: TaskStatus.IDEA },
                    { name: "Todo", value: TaskStatus.TODO },
                    { name: "On hold", value: TaskStatus.ON_HOLD },
                    { name: "In progress", value: TaskStatus.IN_PROGRESS },
                    { name: "Done", value: TaskStatus.DONE }
                ]} label="Status" required={true} message=""/>
                <Linear>
                    <Split>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Idea</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Something you would like to add or suggest</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Todo</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Somebody should pull this Task and start working on it</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>On hold</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Waiting on completion [Downloads, Network Scans], help or dependency</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>In progress</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>In active development</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Done</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Task is finished/closed</Text>
                        </div>
                    </Split>
                    <Text type="p" mono={false} bold={false} highlight={true}>Each status switch needs a comment which explains what was done and the next steps</Text>
                </Linear>
            </Split>
            <Split>
                <Select value={priority} setValue={setPriority} options={[
                    { name: "High", value: TaskPriority.HIGH },
                    { name: "Medium", value: TaskPriority.MEDIUM },
                    { name: "Low", value: TaskPriority.LOW }
                ]} label="Priority" required={true} message=""/>
                <Linear>
                    <Split>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>High</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Needs to be done now</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Medium</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Needs to be done as soon as possible</Text>
                        </div>
                        <div>
                            <Text type="p" mono={false} bold={true} highlight={true}>Low</Text>
                            <Text type="p" mono={false} bold={false} highlight={false}>Nice to have</Text>
                        </div>
                    </Split>
                </Linear>
            </Split>
            <Linear>
                <Split>
                    {
                        profilesData ? (
                            <Select value={assignee} setValue={setAssignee} options={[{name: "Undefined", value: null}, ...profilesData.map(value => {return {name: value.name, value: value.id}})]} label="Assigned" required={false} message=""/>
                        ) : (
                            <Skeleton height={32}/>
                        )
                    }
                    <Linear>
                        <Text type="p" mono={false} bold={false} highlight={true}>The assignee is responsible for completing the task and communicating updates</Text>
                        <Text type="p" mono={false} bold={false} highlight={false}>Tasks are usually assigned by the assignee themselves, exceptions are team leader and monitoring</Text>
                    </Linear>
                </Split>
                <Error title="Failed to load profiles" message={profilesError}/>
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
                <Error title="Failed to save incident" message={taskCreateError}/>
                <Error title="Failed to update incident" message={taskUpdateError}/>
                <Error title="Failed to delete incident" message={taskDeleteError}/>
            </Linear>
        </>
    )
}

export default TaskEditPage
