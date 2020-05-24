import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/actions";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin-bottom: 2%;
  width: 60%;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid teal;
  color: ${(prop) => prop.theme.color.lightText};
  font-size: 1.2rem;
  margin-right: 5%;
  padding: 2%;
  outline: none;
  width: 100%;
`;
const SubmitButton = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  background-color: ${(prop) => prop.theme.color.teal};
  border: none;
  border-radius: 3px;
  color: ${(prop) => prop.theme.color.blue20};
  cursor: pointer;
  padding: 1%;
  width: 50%;
  transition: 0.3s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const SearchForm = ({ getUsers }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getUsers(e.target["query"].value, 1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Find user by name" name="query" required />
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
};

export default connect(null, { getUsers })(SearchForm);
