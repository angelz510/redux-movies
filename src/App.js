import React from "react";
import { useSelector } from "react-redux";
//components
import SearchContainer from "./components/SearchContainer";
import MoviesContainer from "./components/MoviesContainer";
import MovieCard from "./components/MovieCard";
//fragments
import { AppCont } from "./fragments/AppCont";

function App() {
  const theme = useSelector((state) => state.theme);
  const movies = useSelector((state) => state.movies);

  return (
    <AppCont theme={theme}>
      <SearchContainer />
      <MoviesContainer>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            img={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            plot={movie.Plot}
          ></MovieCard>
        ))}
      </MoviesContainer>
    </AppCont>
  );
}

export default App;
