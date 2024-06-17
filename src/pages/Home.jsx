import { getAllPosts, likePost } from "../utilities/apis"
import { useState, useEffect } from "react"
import { getUser } from "../utilities/users-service"

function Home (){
    const [picArray, setPicArray] = useState([{}])

    async function showdatabase() {
        const allposts = await getAllPosts()
        console.log(allposts)
        return setPicArray(allposts)
    }
    useEffect(()=>{
        showdatabase()
    },[]) // run showdatabase only once, when the component is first mounted

    useEffect(()=>{
        console.log(picArray[0]) // log the updated picArray state every time it changes
    },[picArray]) // run this useEffect every time picArray changes
    
    
    async function likeFunction(postId) {
        try {
            const userId = {
                id: getUser()
            }
            const response = await likePost(postId, userId)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
                <h1>PURRFECTPOST</h1>
                {picArray.length === 0? (
                    <div>There are no posts here.</div>
                ) : (
                    picArray.map((post, index) => (
                        <div key={index}>
                            <img src={post.images}/>
                            <h1>{post.caption}</h1>
                            <button onClick={()=>likeFunction(post._id)}> like</button>
                        </div>
                    ))
                )}
        </div>
    )
}

export default Home