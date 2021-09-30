import React from "react";
import { useSelector } from "react-redux";
import { SearchCont } from "../fragments/SearchCont";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchContainer = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <SearchCont theme={theme}>
      <SearchInput />
      <SearchButton />
    </SearchCont>
  );
};

export default SearchContainer;
