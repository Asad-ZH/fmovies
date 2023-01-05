import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";
// 8bb48692

const ApiKey = "http://www.omdbapi.com/?apikey=8bb48692"

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        searchMovies("batman");    
    }, []);
    
    const searchMovies = async (title) => {
        const response = await fetch(`${ApiKey}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

  return (
    <div className="app">

      <h1>Fmovies</h1>
      
        <div className="search">
            
            <input placeholder="Search for a movie..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) }/>
            <img src={SearchIcon} alt="search" onClick={() =>searchMovies(searchTerm)} />
        </div>
        
        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;