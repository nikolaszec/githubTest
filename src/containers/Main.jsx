import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../pages/Search";
import RepositoryList from "../pages/RepositoryList";
import styled from "styled-components";

const MainWrapper = styled.main`
  padding: 2%;
  width: 100%;
`;

const Main = () => {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/repositories/:userName">
            <RepositoryList />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
};

export default Main;
