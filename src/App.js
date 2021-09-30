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
        {console.log(movies)}
        {movies.map((movie, index) => (
          <div key={index}>{movie.title}</div>
        ))}
      </MoviesContainer>
    </AppCont>
  );
}

export default App;
