import { useState } from "react";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
}

const SignIn = () => {
  const [state, setState] = useState("idle");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const prevLocation = useLocation().state?.from || "host";
  const loginMessage = useLocation().state?.message || null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setState("submitting");
    loginUser(formData)
      .then(() => {
        localStorage.setItem("loggedIn", true);
        navigate(prevLocation, { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => setState("idle"));
  };

  return (
    <div className="login-container">
      {loginMessage && <h3>{loginMessage}</h3>}
      <h1 style={{ textAlign: "center", marginBottom: "1em" }}>
        Sign in to your account
      </h1>
      {error && <h3>{error.message}</h3>}
      <Form action="/signin" method="post">
        <input
          className="login-email"
          placeholder="Email"
          type="text"
          name="email"
        />
        <input
          className="login-password"
          placeholder="Password"
          type="password"
          name="password"
        />
        <button
          className="btn-primary login-btn"
          type="submit"
          disabled={state === "submitting"}
        >
          {state === "submitting" ? "Logging in..." : "Log In"}
        </button>
      </Form>
    </div>
  );
};

export default SignIn;
