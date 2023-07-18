import React from "react";
import "./styles.css";
import Movies from "./movies";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Favfinal from "./Favfinal";

export default function App() {



  return (
    <>
      <Header />
      <Routes>

        <Route exact path="/" Component={Movies} />
        <Route exact path="favorite" Component={Favfinal} />
      </Routes>
      
    </>
  );
}
