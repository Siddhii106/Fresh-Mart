import { Link } from "react-router-dom";

function Sidebar({ isOpen, onClose, user, onLogout }) {
  function handleLogout() {
    onLogout();
    onClose();
  }

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          ×
        </button>

        <ul>
          <li><Link to="/" onClick={onClose}>Home</Link></li>
          <li><Link to="/about" onClick={onClose}>About</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contact</Link></li>

          {user ? (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          ) : (
            <>
              <li><Link to="/login" onClick={onClose}>Log In</Link></li>
              <li><Link to="/signup" onClick={onClose}>Sign Up</Link></li>
            </>
          )}
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;