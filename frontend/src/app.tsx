import "./app.scss";
import Navigation from "./components/layout/navigation/navigation.tsx";
import Content from "./components/layout/content/content.tsx";
import {Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard.page.tsx";
import NotFoundPage from "./pages/other/not-found.page.tsx";
import ProfilePage from "./pages/profile/profile.page.tsx";
import LoginPage from "./pages/login/login.page.tsx";
import Header from "./components/layout/header/header.tsx";
import IncidentsPage from "./pages/incidents/incidents.page.tsx";
import IncidentPage from "./pages/incidents/incident.page.tsx";
import TasksPage from "./pages/tasks/tasks.page.tsx";
import TaskPage from "./pages/tasks/task.page.tsx";
import SchedulePage from "./pages/schedule/schedule.page.tsx";
import ScheduleUpdatePage from "./pages/schedule/schedule-update.page.tsx";

const App = () => {

    const pages = [
        {
            title: "Dashboard",
            path: "/",
            element: <DashboardPage/>,
            actions: []
        },
        {
            title: "Login",
            path: "/login",
            element: <LoginPage/>,
            actions: []
        },
        {
            title: "Profile",
            path: "/profile",
            element: <ProfilePage/>,
            actions: []
        },
        {
            title: "Incidents",
            path: "/incidents",
            element: <IncidentsPage/>,
            actions: [
                {
                    name: "Create",
                    path: "/incidents/create"
                }
            ]
        },
        {
            title: "Incident",
            path: "/incidents/:id",
            element: <IncidentPage/>,
            actions: []
        },
        {
            title: "Tasks",
            path: "/tasks",
            element: <TasksPage/>,
            actions: [
                {
                    name: "Create",
                    path: "/reports/create"
                }
            ]
        },
        {
            title: "Task",
            path: "/tasks/:id",
            element: <TaskPage/>,
            actions: []
        },
        {
            title: "Schedule",
            path: "/schedule",
            element: <SchedulePage/>,
            actions: [
                {
                    name: "Update",
                    path: "/schedule/update"
                }
            ]
        },
        {
            title: "Update",
            path: "/schedule/:id",
            element: <ScheduleUpdatePage/>,
            actions: []
        },
        {
            title: "Not Found",
            path: "*",
            element: <NotFoundPage/>,
            actions: []
        }
    ]

    return (
        <div className="app">
            <div className="app__navigation">
                <Navigation/>
            </div>
            <Routes>
                {
                    pages.map((page, key) =>
                        <Route path={page.path} element={
                            <>
                                <div className="app__header">
                                    <Header title={page.title} actions={page.actions}/>
                                </div>
                                <div className="app__content">
                                    <Content>
                                        {page.element}
                                    </Content>
                                </div>
                            </>
                        } key={key}/>)
                }
            </Routes>
        </div>
    )
}

export default App;
