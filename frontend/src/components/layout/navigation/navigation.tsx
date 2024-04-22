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
            <Icon>home</Icon>
          </NavLink>
          <NavLink className="navigation__link" to="/memes">
            <Icon>image</Icon>
          </NavLink>
          <NavLink className="navigation__link" to="/members">
            <Icon>people</Icon>
          </NavLink>
        </div>
        <NavLink className="navigation__link" to="/profile">
          <Icon>account_circle</Icon>
        </NavLink>
      </nav>
  )
}

export default Navigation;
