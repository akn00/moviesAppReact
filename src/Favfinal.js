import React, { useEffect, useState } from "react";
import GlobalLayout from "./GlobalLayout";

const Favfinal = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Retrieve favorites from local storage and parse it into an array
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const fetchMovies = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        // Filter movies by title based on favorites
        const moviesByTitle = data.filter((movie) =>
          favorites.includes(movie.Title)
        );

        setMovies(moviesByTitle);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
                  <h2>Favorites</h2>

      {movies.length > 0 ? (
        <div className="search-main">
          {movies.map((movie) => (
              <GlobalLayout movie={movie} />
          ))}
        </div>
      ) : (
        <div className="noFav">
          <p>No favorites found.</p>
        </div>
      )}
    </div>
  );
};

export default Favfinal;
