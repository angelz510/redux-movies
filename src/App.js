import React from "react";
import { AppCont } from "./fragments/AppCont";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./actions";
//components
import SearchContainer from "./components/SearchContainer";
import Nav from "./components/Nav";
//fragments
import { ThemeBtn } from "./fragments/ThemeBtn";
import { Header } from "./fragments/Header";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <AppCont theme={theme}>
      <Nav />
      <ThemeBtn theme={theme} onClick={() => dispatch(toggleTheme(!theme))}>
        {theme ? "Light" : "Dark"} Mode
      </ThemeBtn>
      <Header theme={theme}>Movie DB</Header>
      <SearchContainer />
    </AppCont>
  );
}

export default App;
