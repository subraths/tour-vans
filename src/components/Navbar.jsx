import { Link } from "react-router-dom";
import logo from "../images/logog.png";

const Navbar = () => (
  <div className="nav-container">
    <nav>
      <Link to="/" className="logo-link">
        <img src={logo} />
      </Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </nav>
  </div>
);

export default Navbar;
