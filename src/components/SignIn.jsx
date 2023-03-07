import { useState } from "react";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const data = useLocation();

  return (
    <div className="login-container">
      {data.state?.message && <h3>{data.state.message}</h3>}
      <h1 style={{ textAlign: "center", marginBottom: "1em" }}>
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="login-email"
          placeholder="Email"
          type="text"
          name="email"
          onChange={handleChange}
        />
        <input
          className="login-password"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button className="btn-primary login-btn">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
