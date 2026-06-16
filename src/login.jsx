import { useState } from "react";

import "./style.css";

function Login({ setUser }) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  // DUMMY USERS

  const users = [

    {
      email: "user@gmail.com",
      password: "123",
      name: "User"
    },

    {
      email: "guest@gmail.com",
      password: "guest123",
      name: "Guest"
    }

  ];

  // LOGIN FUNCTION

  const handleLogin = () => {

    const cleanEmail =
      email.trim().toLowerCase();

    const cleanPassword =
      password.trim();

    const foundUser = users.find(

      (u) =>

        u.email.toLowerCase() ===
        cleanEmail &&

        u.password ===
        cleanPassword

    );

    if (foundUser) {

      setUser(foundUser.name);

      localStorage.setItem(
        "user",
        foundUser.name
      );

      setError("");

    }

    else {

      setError(
        "Wrong email or password"
      );

    }

  };

  // FORGOT PASSWORD

  const forgotPassword = () => {

    if (email === "") {

      alert(
        "Please enter your email first"
      );

    }

    else {

      alert(
        "Password reset link sent to " +
        email
      );

    }

  };

  // GUEST LOGIN

  const guestLogin = () => {

    setUser("Guest User");

    localStorage.setItem(
      "user",
      "Guest User"
    );

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
          placeholder="Email"
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