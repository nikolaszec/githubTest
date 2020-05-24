import React, { useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import PaginationContainer from "./PaginationContainer";
import UserCard from "../components/UserCard";
import styled from "styled-components";
import Spinner from "../components/Spinner";

const UserList = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-top: 3%;
`;
const UserListItem = styled.div`
  width: 220px;
  height: 100%;
  margin: 1%;
`;

const UserContainer = ({ state, getUsers }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePageChange = (query, pageNumber) => {
    setPageNumber(pageNumber);
    getUsers(query, pageNumber);
  };

  return (
    <div>
      {state.error && <div>{state.error}</div>}
      {state.usersNumber > 10 && (
        <PaginationContainer
          pageNumber={pageNumber}
          handlePageChange={(n) => handlePageChange(state.searchQuery, n)}
          totalCount={state.usersNumber}
        />
      )}
      {state.loading ? (
        <Spinner />
      ) : (
        state.users && (
          <UserList>
            {state.users.map((user, index) => (
              <UserListItem key={index}>
                <Link to={`/repositories/${user.login}`}>
                  {!state.loading && (
                    <UserCard
                      avatar={user.avatar_url}
                      name={user.login}
                    ></UserCard>
                  )}
                </Link>
              </UserListItem>
            ))}
          </UserList>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { getUsers })(UserContainer);
