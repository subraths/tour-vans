import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const auth = { token: null };

  if (!auth.token) {
    return (
      <Navigate to="/signin" state={{ message: "You must login first" }} />
    );
  }

  return <Outlet />;
};

export default AuthRequired;
