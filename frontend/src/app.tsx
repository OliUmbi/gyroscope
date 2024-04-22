import "./app.scss";
import Navigation from "./components/layout/navigation/navigation.tsx";
import Content from "./components/layout/content/content.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/home.page.tsx";
import NotFoundPage from "./pages/other/not-found.page.tsx";
import MemesPage from "./pages/memes/memes.page.tsx";
import MembersPage from "./pages/members/members.page.tsx";
import MemberPage from "./pages/members/member.page.tsx";
import ProfilePage from "./pages/profile/profile.page.tsx";
import LoginPage from "./pages/login/login.page.tsx";
import Header from "./components/layout/header/header.tsx";

const App = () => {

  const pages = [
    {
      title: "Home",
      path: "/",
      element: <HomePage/>
    },
    {
      title: "Login",
      path: "/login",
      element: <LoginPage/>
    },
    {
      title: "Memes",
      path: "/memes",
      element: <MemesPage/>
    },
    {
      title: "Members",
      path: "/members",
      element: <MembersPage/>
    },
    {
      title: "Member",
      path: "/members/:id",
      element: <MemberPage/>
    },
    {
      title: "Profile",
      path: "/profile",
      element: <ProfilePage/>
    },
    {
      title: "Not Found",
      path: "*",
      element: <NotFoundPage/>
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
                      <Header title={page.title}/>
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
