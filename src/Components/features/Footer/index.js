import {
  EmailAdress,
  Text,
  Container,
  LinkedInLink,
  GithubLink,
  ExternalLinksContainer,
} from "./styled";
import { ReactComponent as Github } from "./icons/github.svg";
import { ReactComponent as LinkedIn } from "./icons/linkedIn.svg"
import { HeaderParagraph } from "../../common/styled";

export const Footer = () => (
  <Container>
    <HeaderParagraph>Lets talk!</HeaderParagraph>
    <EmailAdress href="mailto:s5zee@wp.pl">s5zee@wp.pl</EmailAdress>
    <Text>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to contact me
    </Text>
    <ExternalLinksContainer>
      <GithubLink href="https://github.com/s5zee/">
        <Github />
      </GithubLink>
      <LinkedInLink href="https://www.linkedin.com/">
        <LinkedIn />
      </LinkedInLink>
    </ExternalLinksContainer>
  </Container>
);
