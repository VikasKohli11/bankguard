import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Dashboard", path: "/dashboard", icon: "▦" },
  { label: "Transactions", path: "/transactions", icon: "↔" },
  { label: "Alerts", path: "/alerts", icon: "⚑" },
  { label: "Fraud Rules", path: "/rules", icon: "◇" },
  { label: "Cases", path: "/cases", icon: "▤" },
  { label: "Users", path: "/users", icon: "♙" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink className="brand" to="/dashboard">
        <span className="brand-mark">B</span>
        <span>BankGuard</span>
      </NavLink>

      <p className="sidebar-label">WORKSPACE</p>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navigation.map(({ label, path, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `sidebar-link${isActive ? " sidebar-link-active" : ""}`
            }
          >
            <span className="sidebar-icon" aria-hidden="true">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">Fraud monitoring workspace</div>
    </aside>
  );
}

export default Sidebar;
