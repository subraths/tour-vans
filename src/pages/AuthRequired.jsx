import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const isLoggedIn = localStorage.getItem("loggedIn");
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/signin"
        replace
        state={{ message: "You must login first", from: location.pathname }}
      />
    );
  }

  return <Outlet />;
};

export default AuthRequired;
