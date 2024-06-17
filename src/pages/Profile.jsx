import { Link } from "react-router-dom"
import { logOut } from "../utilities/users-service"
import { useState, useEffect } from "react"
import { getUser } from "../utilities/users-service"
import { getMyInfo, getMyPosts } from "../utilities/apis"

function Profile (){
    const [myPosts, setmyPosts] = useState([{}])
    const [info, setInfo] = useState({})
const user = getUser()
async function showMe() {
    const myInfo = await getMyInfo(user)
    console.log(myInfo)
    setInfo(myInfo)
}
    async function showdatabase() {
        console.log(user)
        const allposts = await getMyPosts(user)
        console.log(allposts)
        return setmyPosts(allposts)
    }
    useEffect(()=>{
        showdatabase()
        showMe()
    },[])

    return(
        <div>
            <div>
                {/* Profile Pic: */}
                <img src={info.profilePic}/> 
            </div>
            <h1>Name :  {info.name}</h1>
            <h2>Bio : {info.bio}</h2>
            <button onClick={logOut}>Logout</button>
           <Link to='/Settings'><button>Settings</button></Link> 
            <div>
            {myPosts.length === 0? (
                    <div>There are no posts here.</div>
                ) : (
                    myPosts.map((post, index) => (
                        <div key={index}>
                            <img src={post.images}/>
                            <h1>{post.caption}</h1>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Profile