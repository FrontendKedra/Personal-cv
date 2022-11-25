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
} from "./styled";

export const Portfolio = () => (
  <PortfolioContainer>
    <GithubIcon />
    <PortfolioParagraph>Portfolio</PortfolioParagraph>
    <Span>My recent projects</Span>
    <GithubReposContainer>
      <RepositoryContainer>
        <RepositoryHeader>Movies Browser</RepositoryHeader>
        <Description>
          Project description, e.g. website where you can search for favourite
          movies and people. Project description, e.g. website where you can
          search.
        </Description>
        <LinkContainer>
          <Description>Demo:</Description>
          <RepositoryLink href="https://link.demo.com">https://link.demo.com</RepositoryLink>
        </LinkContainer>
        <LinkContainer>
          <Description>Code:</Description>
          <RepositoryLink href="https://link.demo.com">https://link.demo.com</RepositoryLink>
        </LinkContainer>
      </RepositoryContainer>
      <RepositoryContainer>
        {" "}
        <RepositoryHeader>Movies Browser</RepositoryHeader>
        <Description>
          Project description, e.g. website where you can search for favourite
          movies and people. Project description, e.g. website where you can
          search.
        </Description>
        <LinkContainer>
          <Description>Demo:</Description>
          <RepositoryLink href="https://link.demo.com">https://link.demo.com</RepositoryLink>
        </LinkContainer>
        <LinkContainer>
          <Description>Code:</Description>
          <RepositoryLink href="https://link.demo.com">https://link.demo.com</RepositoryLink>
        </LinkContainer>
      </RepositoryContainer>
      <RepositoryContainer>
        {" "}
        <RepositoryHeader>Movies Browser</RepositoryHeader>
        <Description>
          Project description, e.g. website where you can search for favourite
          movies and people. Project description, e.g. website where you can
          search.
        </Description>
        <LinkContainer>
          <Description>Demo:</Description>
          <RepositoryLink href="https://link.demo.com">https://link.demo.com</RepositoryLink>
        </LinkContainer>
        <LinkContainer>
          <Description>Code:</Description>
          <RepositoryLink href="https://link.demo.com">https://link.demo.com</RepositoryLink>
        </LinkContainer>
      </RepositoryContainer>
      <RepositoryContainer>
        {" "}
        <RepositoryHeader>Movies Browser</RepositoryHeader>
        <Description>
          Project description, e.g. website where you can search for favourite
          movies and people. Project description, e.g. website where you can
          search.
        </Description>
        <LinkContainer>
          <Description>Demo:</Description>
          <RepositoryLink href="https://link.demo.com">https://link.demo.com</RepositoryLink>
        </LinkContainer>
        <LinkContainer>
          <Description>Code:</Description>
          <RepositoryLink href="https://link.demo.com">https://link.demo.com</RepositoryLink>
        </LinkContainer>
      </RepositoryContainer>
    </GithubReposContainer>
  </PortfolioContainer>
);
