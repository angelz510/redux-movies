import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchCont } from "../fragments/SearchCont";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

import { searchChange } from "../actions";
import { fetchMovieSearch, setMovies } from "../actions";

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
      <SearchInput onChange={(e) => dispatch(searchChange(e))} />
      <SearchButton onClick={(e) => onSubmit(e, search)} />
    </SearchCont>
  );
};

export default SearchContainer;
