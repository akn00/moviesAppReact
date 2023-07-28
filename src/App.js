import React,{useState} from "react";
import "./styles.css";
import Movies from "./movies";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Favfinal from "./Favfinal";

export default function App() {

const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header setSearchQuery={setSearchQuery} />
      <Routes>

        <Route exact path="/" Component={Movies} />
        <Route exact path="favorite" Component={Favfinal} />
        {/* <Route exact path="SearchResult" Component={SearchResult} /> */}
      </Routes>
      
    </>
  );
}
