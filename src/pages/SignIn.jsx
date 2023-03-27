import { useEffect } from "react";
import {
  Form,
  useActionData,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const from = formData.get("from");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    return { ...data, from };
  } catch (err) {
    return { error: err.message };
  }
}

const SignIn = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const actionData = useActionData();

  const location = useLocation();
  const from = location.state?.from || "/host";

  const loginMessage = location.state?.message || null;

  useEffect(() => {
    if (actionData?.token && actionData.from) {
      navigate(actionData.from, { replace: true });
    }
  }, [actionData]);

  return (
    <div className="login-container">
      {loginMessage && <h3>{loginMessage}</h3>}
      <h1 style={{ textAlign: "center", marginBottom: "1em" }}>
        Sign in to your account
      </h1>
      {actionData?.error && <h3>{actionData.error}</h3>}

      <Form action="/signin" method="post">
        <input
          className="login-email"
          placeholder="Email"
          type="text"
          name="email"
          defaultValue="b@b.com"
        />
        <input
          className="login-password"
          placeholder="Password"
          type="password"
          name="password"
          defaultValue="p123"
        />
        <input type="hidden" value={from} name="from" />
        <button
          className="btn-primary login-btn"
          type="submit"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Logging in..." : "Log In"}
        </button>
      </Form>
    </div>
  );
};

export default SignIn;
