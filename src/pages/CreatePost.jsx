import { useState } from "react";
import { createPost, imageUpload } from "../utilities/apis";

function CreatePost() {
  const [newPost, setNewPost] = useState({
    caption: "",
    images: [],
  });
  function handleChange(evt) {
    if (evt.target.name === "images") {
      setNewPost({ ...newPost, images: Array.from(evt.target.files) });
    } else {
      setNewPost({ ...newPost, [evt.target.name]: evt.target.value });
    }
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      createPost(newPost);
      alert('Post created!')
      setNewPost({
        caption: "",
        images: [],
      })
      setFile(null); 
      document.getElementById('fileInput').value = '';

    } catch (error) {
      console.log(error);
    }
  }

  const [file, setFile] = useState();

  async function handleUpload() {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await imageUpload(formData);
      const imageUrl = response.data;
      setNewPost({
        ...newPost,
        images: [...newPost.images, imageUrl],
      });
      if(imageUrl){
      alert("Image attached. Please submit your form!")
      console.log(imageUrl);}
    } catch (error) {
      console.error("Image uploading failed.", error);
    }
  }

  return (
    <div className="create-Post-container">
    <h1>Create New Post</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fileInput">Images:</label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>
      {newPost.images.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          <ul>
            {newPost.images.map((image, index) => (
              <li className="uploaded-image" key={index}>{image}</li>
            ))}
          </ul>
        </div>
      )}

<label>
        Caption
        <input
          placeholder="Caption"
          name="caption"
          type="text"
          value={newPost.caption}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default CreatePost