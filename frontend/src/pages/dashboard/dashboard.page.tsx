import DashboardSchedule from "../../components/complex/dashboard/schedule/dashboard-schedule.tsx";
import DashboardIncidents from "../../components/complex/dashboard/incidents/dashboard-incidents.tsx";
import DashboardTasks from "../../components/complex/dashboard/tasks/dashboard-tasks.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Split from "../../components/layout/split/split.tsx";

const DashboardPage = () => {

    return (
        <>
            <Linear>
                <DashboardSchedule/>
                <Split>
                    <DashboardIncidents/>
                    <DashboardTasks/>
                </Split>
            </Linear>
        </>
    )
}

export default DashboardPage
