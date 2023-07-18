import React from "react";
import Favlayout from "./Favlayout";

const Favfinal = () => {
  // Retrieve favorites from local storage and parse it into an array
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // console.log(typeof(favorites))
  return (
    <div className="movies-container">
      {favorites.length > 0 ? (
        <div>
          <h2>Favorites</h2>
          {favorites.map((title, index) => (
            <Favlayout key={index} title={title} />
          ))}
        </div>
      ) : (
        <div className="noFav">
            <p>No favorites found</p>
        </div>
        
      )}
    </div>
  );
};

export default Favfinal;
