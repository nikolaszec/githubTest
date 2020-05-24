import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserRepositories } from "../redux/actions/actions";
import PaginationContainer from "./PaginationContainer";
import RepoCard from "../components/RepoCard";
import Spinner from "../components/Spinner";
import styled from "styled-components";

const ReposList = styled.ul`
  flex-wrap: wrap;
  display: flex;
  margin-top: 3%;
`;

const ReposListItem = styled.li`
  width: 300px;
  height: 100%;
  margin: 2%;
`;

const RepositoriesContainer = ({ state, getUserRepositories }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [paginationRepos, setPaginationRepos] = useState([]);

  const { userName } = useParams();

  useEffect(() => {
    getUserRepositories(userName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  useEffect(() => {
    const indexOfLastRepo = pageNumber * 10;
    const indexOfFirstRepo = indexOfLastRepo - 10;
    const currentRepos = state.selectedUserRepos.slice(
      indexOfFirstRepo,
      indexOfLastRepo
    );
    setPaginationRepos(currentRepos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName, pageNumber, state.selectedUserRepos]);

  return (
    <div>
      {state.loading ? (
        <Spinner />
      ) : (
        <>
          {state.selectedUserRepos.length > 10 && (
            <PaginationContainer
              pageNumber={pageNumber}
              handlePageChange={(n) => setPageNumber(n)}
              totalCount={state.selectedUserRepos.length}
            />
          )}

          <ReposList>
            {paginationRepos &&
              paginationRepos.map((repo, index) => {
                return (
                  <ReposListItem key={index}>
                    <RepoCard
                      name={repo.name}
                      description={repo.description}
                      forks_count={repo.forks_count}
                      watchers_count={repo.watchers_count}
                      stargazers_count={repo.stargazers_count}
                      html_url={repo.html_url}
                      createdAt={repo.created_at}
                    />
                  </ReposListItem>
                );
              })}
          </ReposList>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { getUserRepositories })(
  RepositoriesContainer
);
