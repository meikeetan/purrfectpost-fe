import React, { useState, useEffect } from "react";

function Explore (){
    const [catImages, setCatImages] = useState([]);

    useEffect(() => {
      const fetchCatImages = async () => {
        try {
          const response = await fetch(
            "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
          );
          const data = await response.json();
          setCatImages(data);
        } catch (error) {
          console.error("Error fetching cat images:", error);
        }
      };
  
      fetchCatImages();
    }, []);

    return (
      <div>
        <h1>your daily dosage of purrr</h1>
        {catImages.map((image, index) => (
          <img
            key={index}
            style={{ height: "200px", width: "400px", position: "relative", left: "35%" }}
            src={image.url}
            alt="Random Cat Pic"
          />
        ))}
      </div>
    );
  };

export default Explore;



