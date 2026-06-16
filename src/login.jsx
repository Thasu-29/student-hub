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

    const foundUser = users.find(

      (u) =>

        u.email === email &&

        u.password === password

    );

    // SUCCESS LOGIN

    if (foundUser) {

      setUser(foundUser.name);

      // SAVE USER IN LOCAL STORAGE

      localStorage.setItem(
        "user",
        foundUser.name
      );

      setError("");
    }

    // WRONG LOGIN

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

        {/* EMAIL */}

        <input
          type="text"
          placeholder="Email or phone"
          value={email}
          onChange={(e) =>

            setEmail(e.target.value)

          }
        />

        {/* PASSWORD */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>

            setPassword(e.target.value)

          }
        />

        {/* FORGOT PASSWORD */}

        <p
          className="forgot"
          onClick={forgotPassword}
        >

          Forgot password?

        </p>

        {/* ERROR MESSAGE */}

        {error && (

          <p className="error-text">

            {error}

          </p>

        )}

        {/* LOGIN BUTTON */}

        <button
          className="login-btn"
          onClick={handleLogin}
        >

          Sign in

        </button>

        {/* DIVIDER */}

        <div className="divider">

          <span></span>

          <p>or</p>

          <span></span>

        </div>

        {/* GUEST BUTTON */}

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