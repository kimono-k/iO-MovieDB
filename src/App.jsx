import React, { useState } from "react";
import MovieCard from "./components/MovieCard";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Favorites from "./routes/Favorites";
import Edit from "./routes/Edit";
import SearchContextComponent from "./components/SearchContextComponent";
import {
  useSearchData,
  SearchProvider,
  useMovieData,
} from "./hooks/SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <div className="min-h-full">
        <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
              <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                <div className="flex-shrink-0 flex items-center">
                  <a href="#"></a>
                </div>
              </div>
              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                  <SearchContextComponent />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y divide-gray-300"
              >
                {/* navigation */}
                <div className="pb-8 space-y-1">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/favorites">Favorites</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <main className="lg:col-span-9">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/detail" element={<Detail />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/edit" element={<Edit />} />
                </Routes>
              </BrowserRouter>
            </main>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
};

export default App;
