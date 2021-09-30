import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import searchTermReducer from "./searchReducer";
import fetchMoviesReducer from "./moviesReducer";

const allReducers = combineReducers({
  theme: themeReducer,
  search: searchTermReducer,
  movies: fetchMoviesReducer,
});

export default allReducers;
