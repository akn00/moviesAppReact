import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "./SearchContext";
import "./styles.css";
import logo from "./assets/logo.png";

const Header = () => {
  const [sValue, setsValue] = useState("");
  const navigate = useNavigate();
  const { setSearchQuery } = useSearchContext();

  const handlelogoclick = () => {
    navigate("/");
    setSearchQuery("");
    setsValue("");
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
    setsValue(inputValue);
  };

  const handleFavClick = () => {
    navigate("Favorite");
    setSearchQuery("");
    setsValue("");
  };

  return (
    <header>
      <div className="logo" onClick={handlelogoclick}>
        <img src={logo} alt="Logo" />
        <h3>Movies App</h3>
      </div>
      <div className="Search-bar">
        <input
          className="nosubmit"
          onChange={handleChange}
          placeholder="Search..."
          value={sValue}
        />
      </div>
      <button onClick={handleFavClick} className="favorite-button">
        Favorites
      </button>
    </header>
  );
};

export default Header;
