import React, { useContext, useState } from "react";

// Global variables
const omdbApi = `http://www.omdbapi.com/?apikey=1a993ee0&s=`;

// Function argument for the custom hook
const SearchResultContext = React.createContext(); // Used as a provider
const MovieResultContext = React.createContext();

// Custom Hook for making the return value globally available to all children
export function useSearchData() {
  return useContext(SearchResultContext);
}

export function useMovieData() {
  const movieDataContext = useContext(MovieResultContext);
  if (movieDataContext === undefined || movieDataContext === null) {
    throw new Error(
      "MovieResultContext must be used within the MovieResultContextProvider"
    );
  }
  return useContext(MovieResultContext);
}

// The provider is where the state and functions live (for global usage)
export function SearchProvider({ children }) {
  // State variables
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState("");

  // Functions
  // Search for a movie
  const search = (event) => {
    setSearchTerm(event.target.value);
    fetch(`${omdbApi}${searchTerm}`)
      .then((response) => response.json())
      .then((json) => setMovies(json))
      .catch((error) => {
        console.error(error);
      });
    console.log(movies);
    return movies;
  };

  return (
    <SearchResultContext.Provider value={{ search, movies }}>
      <MovieResultContext.Provider value={movies}>
        {children}
      </MovieResultContext.Provider>
    </SearchResultContext.Provider>
  );
}
