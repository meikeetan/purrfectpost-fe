import { Link } from "react-router-dom"
import { logOut } from "../utilities/users-service"

function Profile (){
    return(
        <div>
            <div>Profile Pic</div>
            <h1>Name</h1>
            <h2>Bio</h2>
            <button onClick={logOut}>Logout</button>
           <Link to='/Settings'><button>Settings</button></Link> 
            <div>display my posts</div>
        </div>
    )
}

export default Profile