import React from "react";
import CardWrapper from "./CardWrapper";
import styled from "styled-components";

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
  opacity: 0.7;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const Name = styled.h3`
  color: ${(prop) => prop.theme.color.lightText};
  margin-top: 5%;
  margin-bottom: 5%;
  font-weight: 400;
`;
const UserCard = ({ avatar, name }) => {
  return (
    <CardWrapper>
      <AvatarImage src={avatar} alt={`${name}-profile`} />
      <Name>{name}</Name>
    </CardWrapper>
  );
};

export default UserCard;
