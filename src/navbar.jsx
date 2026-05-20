import "./style.css";

function Navbar({ user, darkMode, setDarkMode }) {

  return (
    <div className="navbar">

      <input placeholder="Search..." />

      <div className="nav-right">

        <button
          className="dark-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <p>👋 Hello, {user}</p>

      </div>

    </div>
  );
}

export default Navbar;