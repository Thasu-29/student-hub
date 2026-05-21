import "./style.css";

function Navbar({

  user,

  setUser,

  darkMode,

  setDarkMode

}) {

  // LOGOUT FUNCTION

  const handleLogout = () => {

    // REMOVE USER FROM STORAGE

    localStorage.removeItem("user");

    // CLEAR USER STATE

    setUser("");

  };

  return (

    <div className="navbar">

      {/* LEFT SIDE */}

      <div className="navbar-left">

        <h2>
          Student Hub
        </h2>

      </div>

      {/* RIGHT SIDE */}

      <div className="navbar-right">

        {/* USER NAME */}

        <p className="user-name">

          👋 {user}

        </p>

        {/* DARK MODE BUTTON */}

        <button
          className="dark-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >

          {darkMode
            ? "☀ Light"
            : "🌙 Dark"}

        </button>

        {/* LOGOUT BUTTON */}

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          Logout

        </button>

      </div>

    </div>
  );
}

export default Navbar;