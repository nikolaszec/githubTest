import React from "react";
import RepositoriesContainer from "../containers/RepositoriesContainer";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const BackButton = styled.button`
  background: ${(prop) => prop.theme.color.blue10};
  color: ${(prop) => prop.theme.color.lightText};
  font-size: 20px;
  font-weight: 600;
  padding: 1%;
  border: 1px solid ${(prop) => prop.theme.color.blue20};
  cursor: pointer;
  border-radius: 3px;
  transition: 0.3s;
  &:hover {
    background: ${(prop) => prop.theme.color.teal};
    color: ${(prop) => prop.theme.color.blue10};
  }
`;

const RepositoryList = () => {
  const history = useHistory();
  return (
    <div>
      <BackButton onClick={() => history.push("/")}>Back</BackButton>
      <RepositoriesContainer />
    </div>
  );
};

export default RepositoryList;
