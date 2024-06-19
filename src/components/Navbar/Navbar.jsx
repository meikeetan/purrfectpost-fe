import { Link } from "react-router-dom";
import "./Navbar.css";
import { logOut } from "../../utilities/users-service";
import "./Navbar.css";

function Navbar(props) {
  const { setUser } = props;
  function handleLogOut() {
    logOut();
    setUser(null);
  }
  return (
    <div className="Navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/Explore">
        Explore
      </Link>
      <Link className="link" to="/CreatePost">
        CreatePost
      </Link>
      <div className="profile-container">
        <Link className="link profile" to="/Profile">
          Profile
        </Link>
        <div className="dropdown">
          <button className="dropbtn">⋮</button>
          <div className="dropdown-content">
            <Link to="/Settings">Settings</Link>
            <button onClick={handleLogOut}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
