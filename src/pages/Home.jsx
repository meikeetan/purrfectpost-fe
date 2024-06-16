import { getAllPosts } from "../utilities/apis"
import { useState, useEffect } from "react"

function Home (){
    const [picArray, setPicArray] = useState([])

    async function showdatabase() {
        const allposts = await getAllPosts()
        console.log(allposts)
        return setPicArray(allposts)
    }

    useEffect(()=>{
        showdatabase()
    },[]) // run showdatabase only once, when the component is first mounted

    useEffect(()=>{
        console.log(picArray) // log the updated picArray state every time it changes
    },[picArray]) // run this useEffect every time picArray changes

    return(
        <div>
            <container>
                <h1>PURRFECTPOST</h1>
                <img src={picArray[0].images}/>
                <button onclick> like</button>
            </container>
        </div>
    )
}

export default Home