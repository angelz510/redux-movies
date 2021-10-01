import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovieSearch = async (search) => {
  try {
    const res = await axios.get(`http://www.omdbapi.com/?s=${search}&plot&apikey=${API_KEY}`);
    console.log(res.data.Search);
    return res.data.Search;
  } catch (err) {
    console.log(err);
  }
};

export const setMovies = (data) => {
  return {
    type: "GET_MOVIES",
    payload: data,
  };
};

export const searchChange = (e) => {
  return {
    type: "SEARCH_CHANGE",
    payload: e,
  };
};

export const toggleTheme = () => {
  return {
    type: "CHANGE_THEME",
  };
};
