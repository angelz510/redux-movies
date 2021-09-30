import React from "react";
import { useSelector } from "react-redux";
import { SearchBtn } from "../fragments/SearchBtn";

const SearchButton = ({ onClick }) => {
  const theme = useSelector((state) => state.theme);

  return (
    <SearchBtn theme={theme} onClick={onClick}>
      Search
    </SearchBtn>
  );
};

export default SearchButton;
