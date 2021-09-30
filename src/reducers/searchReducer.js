const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_CHANGE":
      return action.payload.target.value;
    default:
      return state;
  }
};

export default searchTermReducer;
