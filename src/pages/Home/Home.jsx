import { getAllPosts, likePost } from "../../utilities/apis";
import { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [picArray, setPicArray] = useState([{}]);

  async function showdatabase() {
    const allposts = await getAllPosts();
    console.log(allposts);
    const sortedPosts = allposts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA; // sort in descending order (newest first)
      });
    return setPicArray(sortedPosts);
  }
  useEffect(() => {
    showdatabase();
  }, []); 

  useEffect(() => {
    console.log(picArray[0]); 
  }, [picArray]); 

  async function likeFunction(postId) {
    try {
      const userId = {
        id: getUser(),
      };
      const response = await likePost(postId, userId);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1 className="title">PURRFECTPOST</h1>
      {picArray.length === 0 ? (
        <div>There are no posts here.</div>
      ) : (
        picArray.map((post, index) => (
          <div className="postContainer">
          <div className="post-image" key={index} >
            <Link to={`/interested-profile/${post.createdBy}`}>
              <img src={post.images} />
            </Link>
           </div>
            <div className="caption-and-likes">
              <span className="caption">{post.caption}</span>
              <button className="like-button" onClick={() => likeFunction(post._id)}>like</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;

