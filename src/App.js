import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./actions";
//components
import SearchContainer from "./components/SearchContainer";
import Nav from "./components/Nav";
import MoviesContainer from "./components/MoviesContainer";
//fragments
import { ThemeBtn } from "./fragments/ThemeBtn";
import { Header } from "./fragments/Header";
import { AppCont } from "./fragments/AppCont";
import MovieCard from "./components/MovieCard";

function App() {
  const theme = useSelector((state) => state.theme);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return (
    <AppCont theme={theme}>
      <Nav />
      <ThemeBtn theme={theme} onClick={() => dispatch(toggleTheme(!theme))}>
        {theme ? "Light" : "Dark"} Mode
      </ThemeBtn>
      <Header theme={theme}>Movie DB</Header>
      <SearchContainer />
      <MoviesContainer>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            img={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          ></MovieCard>
        ))}
      </MoviesContainer>
    </AppCont>
  );
}

export default App;
