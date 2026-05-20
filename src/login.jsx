import { useState } from "react";
import "./style.css";

function Login({ setUser }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Dummy users
  const users = [
    {
      email: "thasneem@gmail.com",
      password: "123",
      name: "Thasneem"
    },
    {
      email: "guest@gmail.com",
      password: "guest123",
      name: "Guest"
    }
  ];

  const handleLogin = () => {

    const foundUser = users.find(
      (u) =>
        u.email === email &&
        u.password === password
    );

    if (foundUser) {
      setUser(foundUser.name);
      setError("");
    }

    else {
      setError("Wrong email or password");
    }
  };

  const forgotPassword = () => {

    if (email === "") {
      alert("Please enter your email first");
    }

    else {
      alert(
        "Password reset link sent to " + email
      );
    }
  };

  const guestLogin = () => {
    setUser("Guest User");
  };

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>
          Welcome
        </h1>

        <p className="login-subtitle">
          Stay focused and productive ✨
        </p>

        <input
          type="text"
          placeholder="Email or phone"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <p
          className="forgot"
          onClick={forgotPassword}
        >
          Forgot password?
        </p>

        {error && (
          <p className="error-text">
            {error}
          </p>
        )}

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Sign in
        </button>

        <div className="divider">

          <span></span>

          <p>or</p>

          <span></span>

        </div>

        <button
          className="guest-btn"
          onClick={guestLogin}
        >
          Continue as Guest
        </button>

      </div>

    </div>
  );
}

export default Login;