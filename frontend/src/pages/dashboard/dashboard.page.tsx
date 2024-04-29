import DashboardSchedule from "../../components/complex/dashboard/schedule/dashboard-schedule.tsx";
import DashboardIncidents from "../../components/complex/dashboard/incidents/dashboard-incidents.tsx";
import DashboardTasks from "../../components/complex/dashboard/tasks/dashboard-tasks.tsx";
import Linear from "../../components/layout/linear/linear.tsx";
import Split from "../../components/layout/split/split.tsx";
import useSubscribe from "../../hooks/use-subscribe.ts";
import usePublish from "../../hooks/use-publish.ts";
import {useEffect} from "react";
import {ProfileResponse} from "../../responses/profile.response.ts";
import Skeleton from "../../components/base/skeleton/skeleton.tsx";
import {ProfileScheduleShift} from "../../enums/profile-schedule-shift.enum.ts";

const DashboardPage = () => {

    const [profileResponses] = useSubscribe<ProfileResponse[]>("/profile/loadScheduleDashboard")
    const [dashboardProfileSchedules] = usePublish("/dashboard/profileSchedules")

    useEffect(() => {
        dashboardProfileSchedules("")
    }, []);

    const filterSchedule = (profileResponse: ProfileResponse, shift: ProfileScheduleShift): boolean => {
        if (profileResponse.schedule.length > 0) {
            return profileResponse.schedule[0].shift === shift
        }

        return false;
    }

    return (
        <>
            <Linear>
                <Split>
                    {
                        profileResponses ? (
                            <DashboardSchedule icon="monitor" title="Monitoring / On Call" profiles={profileResponses.filter(value => filterSchedule(value, ProfileScheduleShift.MONITORING))}/>
                            ) : (
                            <Skeleton height={16}/>
                        )
                    }
                </Split>
                <Split>
                    <DashboardIncidents/>
                    <DashboardTasks/>
                </Split>
            </Linear>
        </>
    )
}

export default DashboardPage
