import React from "react";
import { AppCont } from "./fragments/AppCont";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./actions";
import SearchContainer from "./components/SearchContainer";
import { SearchBtn } from "./fragments/SearchBtn";
import { Header } from "./fragments/Header";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <AppCont theme={theme}>
      <SearchBtn onClick={() => dispatch(toggleTheme(!theme))}>
        {theme ? "Light" : "Dark"} Mode
      </SearchBtn>
      <Header theme={theme}>Movie DB</Header>
      <SearchContainer theme={theme} />
    </AppCont>
  );
}

export default App;
