import { ReactComponent as GithubIcon } from "./shape.svg";
import {
  PortfolioContainer,
  PortfolioParagraph,
  Span,
  GithubReposContainer,
  RepositoryContainer,
  RepositoryHeader,
  Description,
  LinkContainer,
  RepositoryLink,
  DemoCodeContainer,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReposResponse,
  selectRepos,
  selectReposCurrentState,
} from "../reposSlice";
import { useEffect } from "react";
import { Loader } from "./states/Loader";
import { Error } from "./states/Error";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repos = useSelector(selectRepos);
  const reposState = useSelector(selectReposCurrentState);

  useEffect(() => {
    dispatch(fetchReposResponse());
  }, [dispatch]);

  return (
    <PortfolioContainer>
      <GithubIcon />
      <PortfolioParagraph>Portfolio</PortfolioParagraph>
      <Span>My recent projects</Span>
      {reposState.loading === true ? (
        <Loader />
      ) : reposState.error === true ? (
        <Error />
      ) : (
        <GithubReposContainer>
          {repos.map(({ id, name, description, homepage, html_url }) => (
            <RepositoryContainer key={id}>
              <RepositoryHeader>{name}</RepositoryHeader>
              {!!description ? (
                <Description>{description}</Description>
              ) : (
                <Description>
                  This project does not contain a description at the moment. Please check back later.
                </Description>
              )}
              <DemoCodeContainer>
              <LinkContainer>
                <Description>Demo:</Description>
                <span>
                  {!homepage ? (
                    "No Demo for this project"
                  ) : (
                    <RepositoryLink
                      href={homepage}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {homepage}
                    </RepositoryLink>
                  )}
                </span>
              </LinkContainer>
              <LinkContainer>
                <Description>Code:</Description>
                <span>
                  <RepositoryLink
                    href={html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {html_url}
                  </RepositoryLink>
                </span>
                </LinkContainer>
                </DemoCodeContainer>
            </RepositoryContainer>
          ))}
        </GithubReposContainer>
      )}
    </PortfolioContainer>
  );
};
