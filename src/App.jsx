import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // API - Application Programming Interface - a set of rules that allows one software application to talk to another.

  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ API_KEY }`
    }
  }

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = `${ API_BASE_URL }/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } 
    
    catch (error) {
      console.error(`Error fetching movies: ${ error }`);
      setErrorMessage("Error fetching movies. Please try again later.");
    }

    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper" />
        <header className="mx-[32px] sm:mx-[64px]">
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold leading-tight tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px]">Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm } />
        </header>

        <section className="all-movies mx-[32px] sm:mx-[64px]">
          <h2 className="mt-[30px]">All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{ errorMessage }</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={ movie.id } movie={ movie } />
              ))}
            </ul>
          )}
        </section>
    </main>
  );
};

export default App;