import React, { useState } from "react";

// Global variables
const omdbApi = `http://www.omdbapi.com/?apikey=1a993ee0&s=`;

const Search = () => {
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
  };

  // Hooks

  return (
    <div className="w-full">
      <label className="sr-only">{}</label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          onChange={search}
          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  );
};

export default Search;