import {
  EmailAdress,
  LetsTalkText,
  LetsTalkContainer,
  LinkedInLink,
  GithubLink,
  ExternalLinksContainer,
} from "./styled";
import { ReactComponent as Github } from "../../../images/Github.svg";
import { ReactComponent as LinkedIn } from "../../../images/LinkedIn.svg";
import { HeaderParagraph } from "../../common/styled";

export const Footer = () => (
  <LetsTalkContainer>
    <HeaderParagraph>Lets talk!</HeaderParagraph>
    <EmailAdress href="mailto:s5zee@wp.pl">s5zee@wp.pl</EmailAdress>
    <LetsTalkText>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to conatct me
    </LetsTalkText>
    <ExternalLinksContainer>
      <GithubLink href="https://github.com/s5zee/">
        <Github />
      </GithubLink>
      <LinkedInLink href="https://www.linkedin.com/">
        <LinkedIn />
      </LinkedInLink>
    </ExternalLinksContainer>
  </LetsTalkContainer>
);
