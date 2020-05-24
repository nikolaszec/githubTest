import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 2%;
  border: 1px solid ${(prop) => prop.theme.color.blue20};
  border-radius: 10px;
  background-color: ${(prop) => prop.theme.color.blue20};
`;
const CardWrapper = ({ children }) => {
  return <Card>{children}</Card>;
};

export default CardWrapper;
