import React,{ useState, useEffect } from "react";
import Segregation from "./segeration";

const Movies = () => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetching data from JSON file
    fetch("data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Extracting unique genres from data
    const genreArray = data.map((item) => item.Genre).filter(Boolean);

    const newArray = [].concat(
      ...genreArray.map((item) => {
        return item.split(", ");
      })
    );

    const uniqueGenres = [...new Set(newArray)];
    setGenres(uniqueGenres);
  }, [data]);


 

  return (
    <div className="movies-container">

      {genres.map((Genre, index) => (
        <div key={index}>
          <h2>{Genre}</h2>
          <Segregation genre={Genre} />
        </div>

      ))}

    </div>
  );
};

export default Movies;
