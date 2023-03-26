import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const styleLink = {
    fontWeight: "bold",
    color: "#161616",
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  };
  return (
    <>
      <nav>
        <NavLink
          end
          style={({ isActive }) => (isActive ? styleLink : null)}
          to="."
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styleLink : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? styleLink : null)}
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styleLink : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
