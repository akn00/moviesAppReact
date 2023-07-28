import React, { useState, useEffect } from "react";
import Segregation from "./segeration";
import GlobalLayout from "./GlobalLayout";
import { useSearchContext } from "./SearchContext";

const Movies = () => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  
  const { searchQuery } = useSearchContext(); // Accessing the search query from context

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
    const newArray = [].concat(...genreArray.map((item) => item.split(", ")));
    const uniqueGenres = [...new Set(newArray)];
    setGenres(uniqueGenres);
  }, [data]);

  useEffect(() => {
    // Filter the movies based on the search query
    if (searchQuery !== "") {
      const filteredMovies = data.filter((movie) =>
        movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResult(filteredMovies);
    } else {
      setSearchResult([]);
    }
  }, [data, searchQuery]);

  return (
    <div className="movies-container">
      {searchQuery === "" ? (
        genres.map((Genre, index) => (
          <div key={index}>
            <h2>{Genre}</h2>
            <Segregation genre={Genre} />
          </div>
        ))
      ) : (
        <div>
          {/* Render the search results */}
          {searchResult.length === 0 ? (
            <div>
              <h2>No movies found</h2>
            </div>
          ) : (
            <div>
              <h2>Search Results : </h2>
              <div className="search-main">
                {searchResult.map((movie) => (
                  <GlobalLayout movie={movie} key={movie.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Movies;
