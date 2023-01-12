import {
  DangerIcon,
  DangerParagraph,
  ErrorContainer,
  ErrorText,
  GithubButton,
} from "./styled";

export const Error = () => (
  <ErrorContainer>
    <DangerIcon />
    <DangerParagraph>Ooops! Something went wrong...</DangerParagraph>
    <ErrorText>
      Sorry, failed to load Github projects.
      <br /> You can check them directly on Github.
    </ErrorText>
    <GithubButton as="a" href="https://github.com/frontendkedra">
      Go To Github
    </GithubButton>
  </ErrorContainer>
);
