import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

import { ThemeBtn } from "../fragments/ThemeBtn";
import { SearchBox } from "../fragments/SearchBox";
import { SearchCont } from "../fragments/SearchCont";
import { Header } from "../fragments/Header";

import { searchChange } from "../actions";
import { fetchMovieSearch, setMovies } from "../actions";
import { toggleTheme } from "../actions";

const SearchContainer = () => {
  const theme = useSelector((state) => state.theme);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const onSubmit = (e, string) => {
    e.preventDefault();
    fetchMovieSearch(string)
      .then((data) => dispatch(setMovies(data)))
      .catch((err) => console.log(err));
  };

  return (
    <SearchCont theme={theme}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Header theme={theme}>Movie App</Header>
        <ThemeBtn theme={theme} onClick={() => dispatch(toggleTheme(!theme))}>
          {theme ? "Light" : "Dark"} Mode
        </ThemeBtn>
      </div>
      <SearchBox theme={theme}>
        <SearchInput onChange={(e) => dispatch(searchChange(e))} />
        <SearchButton onClick={(e) => onSubmit(e, search)} />
      </SearchBox>
    </SearchCont>
  );
};

export default SearchContainer;
