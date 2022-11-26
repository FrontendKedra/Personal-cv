import { ReactComponent as GithubIcon } from "../../../images/Shape.svg";
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
  LoadingParagraph,
  DangerParagraph,
  GithubButton,
  Icon,
  ErrorContainer,
  ErrorText,
  IconParagraph,
} from "./styled";
import { ReactComponent as IconSpinner } from "../../../images/icon-spinner.svg";
import { ReactComponent as DangerIcon } from "../../../images/Danger.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReposResponse,
  selectRepos,
  selectReposCurrentState,
} from "../reposSlice";
import { useEffect } from "react";

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
        <>
          <LoadingParagraph>
            Please wait, projects are being loaded...
          </LoadingParagraph>
          <Icon>
            <IconSpinner />
          </Icon>
        </>
      ) : reposState.error === true ? (
        <ErrorContainer>
          <IconParagraph>
            <DangerIcon />
          </IconParagraph>
          <DangerParagraph>Ooops! Something went wrong...</DangerParagraph>
          <ErrorText>
            Sorry, failed to load Github projects.
            <br /> You can check them directly on Github.
          </ErrorText>
          <GithubButton as="a" href="https://github.com/s5zee">
            Go To Github
          </GithubButton>
        </ErrorContainer>
      ) : (
        <GithubReposContainer>
          {repos.map((repo) => (
            <RepositoryContainer key={repo.id}>
              <RepositoryHeader>{repo.name}</RepositoryHeader>
              <Description>{repo.description}</Description>
              <LinkContainer>
                <Description>Demo:</Description>
                <RepositoryLink href={repo.homepage}>
                  {repo.homepage}
                </RepositoryLink>
              </LinkContainer>
              <LinkContainer>
                <Description>Code:</Description>
                <RepositoryLink href={repo.html_url}>
                  {repo.html_url}
                </RepositoryLink>
              </LinkContainer>
            </RepositoryContainer>
          ))}
        </GithubReposContainer>
      )}
    </PortfolioContainer>
  );
};
