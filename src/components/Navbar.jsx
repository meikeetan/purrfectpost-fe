import { Link } from "react-router-dom"

function Navbar (){
    return(
        <div>
        <Link to='/'>Home</Link>
        <Link to='/CreatePost'>CreatePost</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/SignUp'>SignUp</Link>
        <Link to='/Likes'>Likes</Link>
        <Link to='/Profile'>Profile</Link>

        </div>
    )
}

export default Navbar