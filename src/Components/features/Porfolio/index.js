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
          <RepositoryLink href="https://link.demo.com">
            https://link.demo.com
          </RepositoryLink>
        </LinkContainer>
        <LinkContainer>
          <Description>Code:</Description>
          <RepositoryLink href="https://link.demo.com">
            https://link.demo.com
          </RepositoryLink>
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
          <RepositoryLink href="https://link.demo.com">
            https://link.demo.com
          </RepositoryLink>
        </LinkContainer>
        <LinkContainer>
          <Description>Code:</Description>
          <RepositoryLink href="https://link.demo.com">
            https://link.demo.com
          </RepositoryLink>
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
          <RepositoryLink href="https://link.demo.com">
            https://link.demo.com
          </RepositoryLink>
        </LinkContainer>
        <LinkContainer>
          <Description>Code:</Description>
          <RepositoryLink href="https://link.demo.com">
            https://link.demo.com
          </RepositoryLink>
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
          <RepositoryLink href="https://link.demo.com">
            https://link.demo.com
          </RepositoryLink>
        </LinkContainer>
        <LinkContainer>
          <Description>Code:</Description>
          <RepositoryLink href="https://link.demo.com">
            https://link.demo.com
          </RepositoryLink>
        </LinkContainer>
      </RepositoryContainer>
    </GithubReposContainer>
    <LoadingParagraph>
      Please wait, projects are being loaded...
    </LoadingParagraph>
    <Icon>
      <IconSpinner />
    </Icon>
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
  </PortfolioContainer>
);
