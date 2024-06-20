import { Link } from "react-router-dom"
import { logOut } from "../../utilities/users-service"
import { useState, useEffect } from "react"
import { getUser } from "../../utilities/users-service"
import { getMyInfo, getMyPosts, deletePost } from "../../utilities/apis"
import "./Profile.css";

function Profile (props){
    const [myPosts, setmyPosts] = useState([{}])
    const [info, setInfo] = useState({})
    const userId = getUser()
    const {setUser} = props

    async function showMe() {
        const myInfo = await getMyInfo(userId)
        console.log(myInfo)
        setInfo(myInfo)
}

    async function showdatabase() {
        console.log(userId)
        const allposts = await getMyPosts(userId)
        console.log(allposts)
        return setmyPosts(allposts)
    }

    async function handleDeletePost(postId){
        try {
            const response = await deletePost(postId);
            console.log(response)
            const updatedPosts = myPosts.filter((post) => post._id!== postId);
            setmyPosts(updatedPosts);
        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        showdatabase()
        showMe()
    },[])

    function handleLogOut() {
        logOut()
        setUser(null)
    }

    return(
        <div>
            <div><img className="profilePic" src={info.profilePic}/></div>
            <div className="profileInfo">
            <h1>Name :  {info.name}</h1>
            <h2>Bio : {info.bio}</h2>
            </div>
            <div>
            {myPosts.length === 0? (
                    <div>There are no posts here.</div>
                ) : (
                    myPosts.map((post, index) => (
                        <div key={index} className="post-container">
                            <img src={post.images}/>
                            <h1 className="caption">{post.caption}</h1>
                            <h1>{post.likes && post.likes.length > 0 ? post.likes.length : ""}</h1>
                            <button onClick={() => handleDeletePost(post._id)}>Delete</button> 
                        </div>
                    ))
                )}
            </div> 
        </div>
    )
}

export default Profile