import React from "react";
import CardWrapper from "./CardWrapper";
import { formatDistanceToNow } from "date-fns";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: 400;
  display: -webkit-box;
  min-height: 50px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 3%;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 7%;
  min-height: 50px;
`;

const CreatedAt = styled.p`
  font-weight: 300;
`;
const CountersBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5% 0;
  font-size: 1.3rem;
  align-items: flex-end;
`;

const LinkToGithub = styled.a`
  text-decoration: none;
  text-align: center;
  display: inline-block;
  width: 100%;
  background-color: ${(prop) => {
    return prop.theme.color.teal;
  }};
  padding: 4%;
  border-radius: 3px;
  color: ${(prop) => {
    return prop.theme.color.blue10;
  }};
  font-weight: 600;
`;

const RepoCard = ({
  name,
  description,
  forks_count,
  watchers_count,
  stargazers_count,
  html_url,
  createdAt,
}) => {
  return (
    <CardWrapper>
      <Title>{name}</Title>

      <CreatedAt>
        {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
      </CreatedAt>
      <CountersBox>
        <span>&#9733; {stargazers_count}</span>
        <span> &#128065; {watchers_count}</span>
        <span>&#9282; {forks_count}</span>
      </CountersBox>

      <Description>
        {description ? description : "No description provided."}
      </Description>
      <LinkToGithub
        href={`${html_url}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {" "}
        OPEN IN NEW TAB
      </LinkToGithub>
    </CardWrapper>
  );
};

export default RepoCard;
