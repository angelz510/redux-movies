import React from "react";
import { useSelector } from "react-redux";
import { MoviesCont } from "../fragments/MoviesCont";

const MoviesContainer = (props) => {
  const theme = useSelector((state) => state.theme);

  return <MoviesCont theme={theme}>{props.children}</MoviesCont>;
};

export default MoviesContainer;
