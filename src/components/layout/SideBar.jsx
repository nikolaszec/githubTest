import React from "react";
import styled from "styled-components";
import LogoCat from "../../styles/images/logoCat1.png";

const SideBarWrapper = styled.div`
  width: 250px;
  border: 6px solid ${(prop) => prop.theme.color.blue10};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: center;
`;

const Logo = styled.img`
  height: 100%;
  width: 70%;
  margin: 0 auto;
`;
const Title = styled.h1`
  margin-top: 10%;
  letter-spacing: 3px;
  font-weight: 600;
`;
const SideBar = () => {
  return (
    <SideBarWrapper>
      <Logo src={LogoCat} />
      <Title>GITHUB</Title>
    </SideBarWrapper>
  );
};

export default SideBar;
