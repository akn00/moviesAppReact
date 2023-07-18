import React, { useEffect, useState, useRef } from "react";
import Favorite from "./Favorite";

const Favlayout = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const movieRowRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        const moviesByTitle = data.filter((movie) =>
          movie.Title.includes(title)
        );

        setMovies(moviesByTitle);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [title]);
 
  const scrollLeft = () => {
    if (movieRowRef.current) {
      movieRowRef.current.scrollBy({
        left: -200, // Adjust the scroll distance as per your thumbnail width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (movieRowRef.current) {
      movieRowRef.current.scrollBy({
        left: 200, // Adjust the scroll distance as per your thumbnail width
        behavior: "smooth",
      });
    }
  };

  const shouldShowNavigation = movies.length > 7; // Adjust the condition based on your requirements

  return (
    <div className="movie-row-container">
      {shouldShowNavigation && (
        <div className="navigation-button left" onClick={scrollLeft}>
          &lt;
        </div>
      )}
      <div className="movie-row-fav" ref={movieRowRef}>
        {movies.map((movie) => (
          <div className="thumbnail-container" key={movie.Title}>
            <Favorite movie={movie} />
          </div>
        ))}
      </div>
      {shouldShowNavigation && (
        <div className="navigation-button right" onClick={scrollRight}>
          &gt;
        </div>
      )}
    </div>
  );
};

export default Favlayout;
