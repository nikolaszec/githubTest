import {
  SET_USERS,
  SET_SEARCH_QUERY,
  SET_USER_REPOS,
  START_LOADING,
  STOP_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_USERS_NUMBER,
} from "../types";
import { BASE_URL } from "../../fetchConfig";

export const getUsers = (query, pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    let response = await fetch(
      `${BASE_URL}/search/users?page=${pageNumber}&per_page=10&q=${query}`
    );
    //Checking Api requests limit
    if (response.headers.get("X-RateLimit-Remaining") <= 1) {
      dispatch({
        type: SET_ERROR,
        payload: "API rate limit exceeded, try again in a minute.",
      });
      dispatch({ type: STOP_LOADING });
      return;
      //Checking search results limit
    } else if (response.status === 422) {
      dispatch({
        type: SET_ERROR,
        payload: "Only the first 1000 search results are available",
      });
      dispatch({
        type: STOP_LOADING,
      });
      return;
    } else {
      let { items: users, total_count: usersNumber } = await response.json();
      const modifiedUsers = users.map(({ login, avatar_url }) => {
        return {
          login,
          avatar_url,
        };
      });
      dispatch({
        type: SET_USERS,
        payload: modifiedUsers,
      });
      dispatch({
        type: SET_USERS_NUMBER,
        payload: usersNumber,
      });
      dispatch({ type: SET_SEARCH_QUERY, payload: query });
      dispatch({ type: STOP_LOADING });
      dispatch({ type: CLEAR_ERROR });
    }
  } catch (error) {
    dispatch({ type: STOP_LOADING });
  }
};

export const getUserRepositories = (userName) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    let response = await fetch(`${BASE_URL}/users/${userName}/repos`);

    let repositories = await response.json();
    const newRepos = repositories.map(
      ({
        name,
        description,
        forks_count,
        watchers_count,
        stargazers_count,
        html_url,
        licence,
        created_at,
      }) => {
        return {
          name,
          description,
          forks_count,
          watchers_count,
          stargazers_count,
          html_url,
          licence,
          created_at,
        };
      }
    );

    dispatch({ type: SET_USER_REPOS, payload: newRepos });
    dispatch({ type: STOP_LOADING });
    dispatch({ type: CLEAR_ERROR });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    dispatch({ type: SET_ERROR, payload: error });
  }
};
