import DashboardSchedule from "../../components/complex/dashboard/schedule/dashboard-schedule.tsx";
import DashboardIncidents from "../../components/complex/dashboard/incidents/dashboard-incidents.tsx";
import DashboardTasks from "../../components/complex/dashboard/tasks/dashboard-tasks.tsx";

const DashboardPage = () => {

    return (
        <>
            <DashboardSchedule/>
            <DashboardIncidents/>
            <DashboardTasks/>
        </>
    )
}

export default DashboardPage
