import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (error) {
    console.error("Unable to read saved user information:", error);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="topbar">
      <div>
        <p className="topbar-eyebrow">BANKGUARD / OPERATIONS</p>
        <p className="topbar-title">Fraud monitoring</p>
      </div>
      <div className="topbar-account">
        <div className="account-avatar" aria-hidden="true">
          {(user?.name || user?.email || "A").charAt(0).toUpperCase()}
        </div>
        <div className="account-copy">
          <span>{user?.name || "Analyst"}</span>
          <small>{user?.role || "ANALYST"}</small>
        </div>
        <button className="logout-button" type="button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </header>
  );
}

export default Topbar;
