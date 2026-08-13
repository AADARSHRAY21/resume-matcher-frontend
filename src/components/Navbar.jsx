import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? "bg-panel text-signal" : "text-text-muted hover:text-text"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-3 pr-20 bg-panel/80 backdrop-blur border-b border-line">
      <div className="flex items-center gap-2">
        <NavLink to="/resume-upload" className={linkClass}>Resume</NavLink>
        <NavLink to="/jd-upload" className={linkClass}>Job Description</NavLink>
        <NavLink to="/match" className={linkClass}>Match</NavLink>
      </div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 rounded-md text-sm font-medium text-gap hover:bg-panel-hover transition-colors"
      >
        Log Out
      </button>
    </nav>
  );
}