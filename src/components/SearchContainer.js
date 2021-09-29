import React from "react";
import { SearchCont } from "../fragments/SearchCont";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchContainer = () => {
  return (
    <SearchCont>
      <SearchInput />
      <SearchButton />
    </SearchCont>
  );
};

export default SearchContainer;
