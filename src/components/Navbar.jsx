import { Link, NavLink } from "react-router-dom";
import logo from "../images/logog.png";
import signinLogo from "../images/Icon.png";

const Navbar = () => (
  <div className="nav-container">
    <nav>
      <NavLink to="." className="logo-link">
        <img src={logo} />
      </NavLink>
      <NavLink
        className={(obj) => (obj.isActive ? "active-link" : null)}
        to="host"
      >
        Host
      </NavLink>
      <NavLink
        to="about"
        className={(obj) => (obj.isActive ? "active-link" : null)}
      >
        About
      </NavLink>
      <NavLink
        to="vans"
        className={(obj) => (obj.isActive ? "active-link" : null)}
      >
        Vans
      </NavLink>
      <NavLink to="signin">
        <img src={signinLogo} style={{ maxWidth: "18px" }} />
      </NavLink>
    </nav>
  </div>
);

export default Navbar;
