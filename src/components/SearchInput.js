import React from "react";
import { useSelector } from "react-redux";
import { SearchInp } from "../fragments/SearchInp";

const SearchInput = () => {
  const theme = useSelector((state) => state.theme);

  return <SearchInp placeholder="Search Movie" theme={theme}></SearchInp>;
};

export default SearchInput;
