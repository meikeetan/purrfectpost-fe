// import { Link } from "react-router-dom"
// import './Navbar.css'
// import { useState } from "react"

// function Navbar (){

//     return(
//         <div>
//         <Link className="Navbar" to='/'>Home</Link>
//         <Link className="Navbar" to='/Explore'>Explore</Link>
//         <Link className="Navbar" to='/CreatePost'>CreatePost</Link>
//         <Link className="Navbar" to='/Profile'>Profile</Link>

//         </div>
//     )
// }

// export default Navbar

import { Link } from "react-router-dom";
import "./Navbar.css";
import { logOut } from "../utilities/users-service";


function Navbar(props) {
    const {setUser} = props
    function handleLogOut() {
        logOut()
        setUser(null)
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