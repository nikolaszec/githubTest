import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer";
const initialState = {
  users: [],
  usersNumber: 0,
  searchQuery: "",
  selectedUserRepos: [],
  loading: false,
  error: "",
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
