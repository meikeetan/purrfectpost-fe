import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar (){
    return(
        <div>
        <Link className="Navbar" to='/'>Home</Link>
        <Link className="Navbar" to='/CreatePost'>CreatePost</Link>
        <Link className="Navbar" to='/Likes'>Likes</Link>
        <Link className="Navbar" to='/Profile'>Profile</Link>

        </div>
    )
}

export default Navbar