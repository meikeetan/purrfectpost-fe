import { useState } from "react";
import { imageUpload, updateMyInfo } from "../../utilities/apis";
import { getUser } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // add this state to store the uploaded image URL
    const user = getUser()
    const navigate = useNavigate();

 

  async function handleUpload() {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await imageUpload(formData);
      console.log(response)
      const image = response.data;
      setImageUrl(image)
      if(image){
      alert("Image attached successfully.")
      console.log(image);}
    } catch (error) {
      console.error("Image uploading failed.", error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userInput = { name, bio, profilePic: imageUrl };
      const response = await updateMyInfo(user,userInput);
      if(response) alert('changes made')
      setError(null);
      navigate("/profile"); // navigate to the Profile page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Profile Pic</div>
      <div>
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
      
      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
              <img className="uploaded-image"  src={imageUrl}></img>
              </div>
          )}
      <label>Name: <input type="text" value={name} onChange={(event) => setName(event.target.value)} /></label>
      <br />
      <label>Bio: <input type="text" value={bio} onChange={(event) => setBio(event.target.value)} /></label>
      <br />
      <button type="submit">Save Changes</button>
      {error && <div>{error}</div>}
    </form>
  );
}

export default Settings;