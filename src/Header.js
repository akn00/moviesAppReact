import React from "react";
import "./styles.css";
import logo from "./assets/logo.png";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate=useNavigate();
  return (
    <header>
      <div className="logo" onClick={()=>navigate("/")}>
        <img src={logo} alt="Logo" />
        <h3>Movies App</h3>
      </div>
      
      <button onClick={()=>navigate("favorite")} className="favorite-button">Favorites</button>
    </header>
  );
};
export default Header;
