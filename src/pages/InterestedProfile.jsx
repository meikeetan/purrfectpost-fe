import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getMyInfo, getMyPosts } from "../utilities/apis"

function InterestedProfile (){
    const  {userId}  = useParams();
    console.log(userId)
    const [myPosts, setmyPosts] = useState([{}])
    const [info, setInfo] = useState({})

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

    useEffect(()=>{
        showdatabase()
       showMe()
    },[])

    return (
        <div>
            <img src={info.profilePic}/> 
            <h1>Name :  {info.name}</h1>
            <h2>Bio : {info.bio}</h2>
            <div>
            {myPosts.length === 0? (
                    <div>There are no posts here.</div>
                ) : (
                    myPosts.map((post, index) => (
                        <div key={index}>
                            <img src={post.images}/>
                            <h1>{post.caption}</h1>
                            <h1>{post.likes && post.likes.length > 0 ? post.likes.length : ""}</h1>
                        </div>
                    ))
                )}
            </div> 
        </div>
    )
}

export default InterestedProfile
