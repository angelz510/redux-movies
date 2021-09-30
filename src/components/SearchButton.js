import React from "react";
import { useSelector } from "react-redux";
import { SearchBtn } from "../fragments/SearchBtn";

const SearchButton = () => {
  const theme = useSelector((state) => state.theme);

  return <SearchBtn theme={theme}>Search</SearchBtn>;
};

export default SearchButton;
