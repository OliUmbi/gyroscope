import "./navigation.scss";
import {NavLink} from "react-router-dom";
import Icon from "../../base/icon/icon.tsx";
import imageGyroscope from "/static/gyroscope.svg"

const Navigation = () => {

  return (
      <nav className="navigation">
        <div className="navigation__logo">
          <img src={imageGyroscope} alt="logo gyroscope"/>
        </div>
        <div className="navigation__links">
          <NavLink className="navigation__link" to="/">
            <Icon>space_dashboard</Icon>
          </NavLink>
          <NavLink className="navigation__link" to="/incidents">
            <Icon>breaking_news</Icon>
          </NavLink>
          <NavLink className="navigation__link" to="/tasks">
            <Icon>task</Icon>
          </NavLink>
          <NavLink className="navigation__link" to="/schedule">
            <Icon>event_note</Icon>
          </NavLink>
        </div>
        <NavLink className="navigation__link" to="/profile">
          <Icon>tune</Icon>
        </NavLink>
      </nav>
  )
}

export default Navigation;
