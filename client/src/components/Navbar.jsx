import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Login</Link>
      <Link to="/dashboard" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Dashboard</Link>
    </nav>
  );
}

export default Navbar;
