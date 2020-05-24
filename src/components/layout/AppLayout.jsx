import React from "react";
import SideBar from "./SideBar";
import Main from "../../containers/Main";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border: 10px solid ${(prop) => prop.theme.color.blue20};
  border-radius: 10px;
  height: 100%;
  margin: 5% 10% 5% 10%;
`;

const AppLayout = () => {
  return (
    <Wrapper>
      <SideBar />
      <Main />
    </Wrapper>
  );
};

export default AppLayout;
