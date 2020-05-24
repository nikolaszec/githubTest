import {
  SET_USERS,
  SET_USERS_NUMBER,
  SET_SEARCH_QUERY,
  SET_USER_REPOS,
  START_LOADING,
  STOP_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        selectedUserRepos: [],
        users: action.payload,
      };
    case SET_USERS_NUMBER:
      return {
        ...state,
        usersNumber: action.payload,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SET_USER_REPOS:
      return {
        ...state,
        selectedUserRepos: [...action.payload],
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};
