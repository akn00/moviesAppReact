import React, { useEffect, useState, useRef } from "react";
import MovieThumbnail from "./thumbnail";

const Segregation = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  const movieRowRef = useRef(null);

  //
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        const moviesByGenre = data.filter((movie) =>
          movie.Genre.includes(genre)
        );

        setMovies(moviesByGenre);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [genre]);

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

  return (
    <div className="movie-row-container">
      <div className="navigation-button left" onClick={scrollLeft}>
        &lt;
      </div>
      <div className="movie-row" ref={movieRowRef}>
        {movies.map((movie) => (
          <div className="thumbnail-container" key={movie.id}>
            <MovieThumbnail movie={movie} />
          </div>
        ))}
      </div>
      <div className="navigation-button right" onClick={scrollRight}>
        &gt;
      </div>
    </div>
  );
};

export default Segregation;
