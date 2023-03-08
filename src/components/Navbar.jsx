import { Link, NavLink } from "react-router-dom";
import logo from "../images/logog.png";
import signinLogo from "../images/Icon.png";

const Navbar = () => {
  function fakeLogout() {
    localStorage.removeItem("loggedIn");
  }

  return (
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
        <Link to="signin">
          <img src={signinLogo} style={{ maxWidth: "18px" }} />
        </Link>
        <button onClick={fakeLogout}>X</button>
      </nav>
    </div>
  );
};

export default Navbar;
