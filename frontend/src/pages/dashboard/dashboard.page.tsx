import DashboardSchedule from "../../components/complex/dashboard/schedule/dashboard-schedule.tsx";
import DashboardIncidents from "../../components/complex/dashboard/incidents/dashboard-incidents.tsx";
import DashboardTask from "../../components/complex/dashboard/tasks/dashboard-task.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Split from "../../components/layout/split/split.tsx";
import useApi from "../../hooks/use-api.ts";
import {ProfileResponse} from "../../responses/profile.response.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {ProfileScheduleShift} from "../../enums/profile-schedule-shift.enum.ts";
import {IncidentSeverity} from "../../enums/incident-severity.enum.ts";
import {TaskStatus} from "../../enums/task-status.enum.ts";
import {IncidentResponse} from "../../responses/incident.response.ts";
import {TaskResponse} from "../../responses/task.response.ts";
import {useEffect} from "react";
import {Method} from "../../enums/method.enum.ts";
import Error from "../../components/complex/error/error.tsx";

const DashboardPage = () => {

    const [schedules, schedulesData, schedulesError] = useApi<ProfileResponse[]>()
    const [incidents, incidentsData, incidentsError] = useApi<IncidentResponse[]>()
    const [tasks, tasksData, tasksError] = useApi<TaskResponse[]>()

    useEffect(() => {
        schedules("profile/schedule", Method.GET)
        incidents("incident", Method.GET)
        tasks("task", Method.GET)

        let interval = setInterval(() => {
            schedules("profile/schedule", Method.GET)
            incidents("incident", Method.GET)
            tasks("task", Method.GET)
        }, 20000)

        return () => clearInterval(interval)
    }, []);

    const filterProfiles = (shift: ProfileScheduleShift): ProfileResponse[] => {
        if (schedulesData) {
            return schedulesData.filter(value => {
                if (value.schedule.length > 0) {
                    return value.schedule[0].shift === shift
                }

                return false
            })
        }

        return []
    }

    const filterIncidents = (severity: IncidentSeverity): number => {
        if (incidentsData) {
            return incidentsData.filter(value => value.severity === severity).length
        }

        return 0
    }

    const filterTasks = (status: TaskStatus): string => {
        if (tasksData) {
            let total = tasksData.filter(value => value.status !== TaskStatus.IDEA).length

            return (tasksData.filter(value => value.status === status).length / total * 100).toFixed(2) + "%"
        }

        return "0%"
    }

    return (
        <>

            <Linear>
                <Error title="Failed to load schedules" message={schedulesError}/>
                <Split>
                    {
                        schedulesData ? (
                            <>
                                <DashboardSchedule icon="monitor" title="Monitoring / On Call" profiles={filterProfiles(ProfileScheduleShift.MONITORING)}/>
                                <DashboardSchedule icon="terminal" title="Working" profiles={filterProfiles(ProfileScheduleShift.WORK)}/>
                                <DashboardSchedule icon="bed" title="Sleeping" profiles={filterProfiles(ProfileScheduleShift.SLEEP)}/>
                                <DashboardSchedule icon="coffee" title="Break" profiles={filterProfiles(ProfileScheduleShift.BREAK)}/>
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
                    <Error title="Failed to load incidents" message={incidentsError}/>
                    <Error title="Failed to load tasks" message={tasksError}/>
                    <Split>
                        {
                            incidentsData ? (
                                <>
                                    <DashboardIncidents name="Critcal" value={filterIncidents(IncidentSeverity.CRITICAL)}/>
                                    <DashboardIncidents name="High" value={filterIncidents(IncidentSeverity.HIGH)}/>
                                    <DashboardIncidents name="Medium" value={filterIncidents(IncidentSeverity.MEDIUM)}/>
                                    <DashboardIncidents name="Low" value={filterIncidents(IncidentSeverity.LOW)}/>
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
                            tasksData ? (
                                <>
                                    <DashboardTask name="ToDo" value={filterTasks(TaskStatus.TODO)}/>
                                    <DashboardTask name="On Hold" value={filterTasks(TaskStatus.ON_HOLD)}/>
                                    <DashboardTask name="In Progress" value={filterTasks(TaskStatus.IN_PROGRESS)}/>
                                    <DashboardTask name="Done" value={filterTasks(TaskStatus.DONE)}/>
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
