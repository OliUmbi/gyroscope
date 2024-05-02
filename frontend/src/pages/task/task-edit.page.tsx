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
import {useEffect} from "react";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {Method} from "../../enums/method.enum.ts";

const TaskEditPage = () => {

    const [profiles, profilesData] = useApi<ProfileResponse[]>()

    useEffect(() => {
        profiles("profile", Method.GET)
    }, []);

    return (
        <>
            <Split>
                <Input value="" setValue={value => console.log(value)} type="text" label="Title" required={true}
                       placeholder="Suspicious activity on service XYZ" message=""/>

                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>Short and concise description of what has to be done</Text>
                </Linear>
            </Split>
            <Split>
                <Select value={TaskStatus.ON_HOLD} setValue={() => {}} options={[
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
                <Select value={TaskPriority.HIGH} setValue={() => {}} options={[
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
            <Split>
                {
                    profilesData ? (
                        <Select value={null} setValue={() => {}} options={[{name: "Undefined", value: null}, ...profilesData.map(value => {return {name: value.name, value: value.id}})]} label="Assigned" required={false} message=""/>
                    ) : (
                        <Skeleton height={32}/>
                    )
                }
                <Linear>
                    <Text type="p" mono={false} bold={false} highlight={true}>The assignee is responsible for completing the task and communicating updates</Text>
                    <Text type="p" mono={false} bold={false} highlight={false}>Tasks are usually assigned by the assignee themselves, exceptions are team leader and monitoring</Text>
                </Linear>
            </Split>
            <Button onClick={() => {}} highlight={false}>
                <Text type="p" mono={false} bold={true} highlight={true}>Delete</Text>
            </Button>
        </>
    )
}

export default TaskEditPage
