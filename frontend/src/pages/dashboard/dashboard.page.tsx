import DashboardSchedule from "../../components/complex/dashboard/schedule/dashboard-schedule.tsx";
import DashboardIncidents from "../../components/complex/dashboard/incidents/dashboard-incidents.tsx";
import DashboardTask from "../../components/complex/dashboard/tasks/dashboard-task.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Split from "../../components/layout/split/split.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import {ProfileResponse} from "../../responses/profile.response.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {ProfileScheduleShift} from "../../enums/profile-schedule-shift.enum.ts";
import {TaskResponse} from "../../responses/task.response.ts";
import {IncidentResponse} from "../../responses/incident.response.ts";
import {IncidentSeverity} from "../../enums/incident-severity.enum.ts";
import {TaskStatus} from "../../enums/task-status.enum.ts";

const DashboardPage = () => {

    const [profileResponses] = useSubscribe<ProfileResponse[]>("/profile/schedule")
    const [incidentResponses] = useSubscribe<IncidentResponse[]>("/incident")
    const [taskResponses] = useSubscribe<TaskResponse[]>("/task")
    const [dashboardProfileSchedule] = usePublish("/profile/schedule")
    const [dashboardIncident] = usePublish("/incident")
    const [dashboardTask] = usePublish("/task")

    useEffect(() => {
        dashboardProfileSchedule("")
        dashboardIncident("")
        dashboardTask("")
    }, []);

    const profiles = (shift: ProfileScheduleShift): ProfileResponse[] => {
        if (profileResponses) {
            return profileResponses.filter(value => {
                if (value.schedule.length > 0) {
                    return value.schedule[0].shift === shift
                }

                return false
            })
        }

        return []
    }

    const incidents = (severity: IncidentSeverity): number => {
        if (incidentResponses) {
            return incidentResponses.filter(value => value.severity === severity).length
        }

        return 0
    }

    const tasks = (status: TaskStatus): string => {
        if (taskResponses) {
            let total = taskResponses.filter(value => value.status !== TaskStatus.IDEA).length

            return (taskResponses.filter(value => value.status === status).length / total * 100).toFixed(2) + "%"
        }

        return "0%"
    }

    return (
        <>

            <Linear>
                <Split>
                    {
                        profileResponses ? (
                            <>
                                <DashboardSchedule icon="monitor" title="Monitoring / On Call" profiles={profiles(ProfileScheduleShift.MONITORING)}/>
                                <DashboardSchedule icon="terminal" title="Working" profiles={profiles(ProfileScheduleShift.WORK)}/>
                                <DashboardSchedule icon="bed" title="Sleeping" profiles={profiles(ProfileScheduleShift.SLEEP)}/>
                                <DashboardSchedule icon="coffee" title="Break" profiles={profiles(ProfileScheduleShift.BREAK)}/>
                            </>
                        ) : (
                            <>
                                <Skeleton height={16}/>
                                <Skeleton height={16}/>
                                <Skeleton height={16}/>
                                <Skeleton height={16}/>
                            </>
                        )
                    }
                </Split>
                <Split>
                    <Split>
                        {
                            incidentResponses ? (
                                <>
                                    <DashboardIncidents name="Critcal" value={incidents(IncidentSeverity.CRITICAL)}/>
                                    <DashboardIncidents name="High" value={incidents(IncidentSeverity.HIGH)}/>
                                    <DashboardIncidents name="Medium" value={incidents(IncidentSeverity.MEDIUM)}/>
                                    <DashboardIncidents name="Low" value={incidents(IncidentSeverity.LOW)}/>
                                </>
                            ) : (
                                <>
                                    <Skeleton height={16}/>
                                    <Skeleton height={16}/>
                                    <Skeleton height={16}/>
                                    <Skeleton height={16}/>
                                </>
                            )
                        }
                    </Split>
                    <Linear>
                        {
                            taskResponses ? (
                                <>
                                    <DashboardTask name="ToDo" value={tasks(TaskStatus.TODO)}/>
                                    <DashboardTask name="On Hold" value={tasks(TaskStatus.ON_HOLD)}/>
                                    <DashboardTask name="In Progress" value={tasks(TaskStatus.IN_PROGRESS)}/>
                                    <DashboardTask name="Done" value={tasks(TaskStatus.DONE)}/>
                                </>
                            ) : (
                                <Skeleton height={32}/>
                            )
                        }
                    </Linear>
                </Split>
            </Linear>
        </>
    )
}

export default DashboardPage
