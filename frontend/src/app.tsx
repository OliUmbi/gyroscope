import "./app.scss";
import Navigation from "./components/layout/navigation/navigation.tsx";
import Content from "./components/layout/content/content.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import DashboardPage from "./pages/dashboard/dashboard.page.tsx";
import NotFoundPage from "./pages/other/not-found.page.tsx";
import ProfilePage from "./pages/profile/profile.page.tsx";
import LoginPage from "./pages/login/login.page.tsx";
import Header from "./components/layout/header/header.tsx";
import IncidentsPage from "./pages/incident/incidents.page.tsx";
import IncidentPage from "./pages/incident/incident.page.tsx";
import TasksPage from "./pages/task/tasks.page.tsx";
import TaskPage from "./pages/task/task.page.tsx";
import SchedulePage from "./pages/schedule/schedule.page.tsx";
import ScheduleEditPage from "./pages/schedule/schedule-edit.page.tsx";
import IncidentEditPage from "./pages/incident/incident-edit.page.tsx";
import TaskEditPage from "./pages/task/task-edit.page.tsx";
import {useEffect, useRef} from "react";
import AuthenticationInvalid from "./components/complex/authentication/invalid/authentication-invalid.tsx";

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
                    name: "New",
                    path: "new/edit"
                }
            ]
        },
        {
            title: "Incident",
            path: "/incidents/:id",
            element: <IncidentPage/>,
            actions: [
                {
                    name: "Edit",
                    path: "edit"
                }
            ]
        },
        {
            title: "Incident",
            path: "/incidents/:id/edit",
            element: <IncidentEditPage/>,
            actions: []
        },
        {
            title: "Tasks",
            path: "/tasks",
            element: <TasksPage/>,
            actions: [
                {
                    name: "New",
                    path: "new/edit"
                }
            ]
        },
        {
            title: "Task",
            path: "/tasks/:id",
            element: <TaskPage/>,
            actions: [
                {
                    name: "Edit",
                    path: "edit"
                }
            ]
        },
        {
            title: "Task",
            path: "/tasks/:id/edit",
            element: <TaskEditPage/>,
            actions: []
        },
        {
            title: "Schedule",
            path: "/schedule",
            element: <SchedulePage/>,
            actions: [
                {
                    name: "Edit",
                    path: "edit"
                }
            ]
        },
        {
            title: "Schedule",
            path: "/schedule/edit",
            element: <ScheduleEditPage/>,
            actions: []
        },
        {
            title: "Not Found",
            path: "*",
            element: <NotFoundPage/>,
            actions: []
        }
    ]

    const {pathname} = useLocation();
    const content = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (content.current !== null) {
            content.current.scroll({behavior: "smooth", top: 0, left: 0})
        }
    }, [pathname]);

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
                                <div className="app__content" ref={content}>
                                    <Content>
                                        {page.element}
                                    </Content>
                                </div>
                            </>
                        } key={key}/>)
                }
            </Routes>
            <AuthenticationInvalid/>
        </div>
    )
}

export default App;
