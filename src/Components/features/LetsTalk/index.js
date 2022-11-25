import { BasicInfo } from "../../common/BasicInfo";
import { HeaderParagraph } from "../Introduction/styled";
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

export const LetsTalk = () => (
  <LetsTalkContainer>
    <BasicInfo
      title={<HeaderParagraph>Lets talk!</HeaderParagraph>}
      headerContent={<EmailAdress href="s5zee@wp.pl">s5zee@wp</EmailAdress>}
      body={
        <LetsTalkText>
          I’m always open to new projects whenever I have the time. If you have
          a website, dashboard or mobile app in mind and need some help to make
          your ideas come to life, feel free to conatct me
        </LetsTalkText>
      }
      linkButton={
        <ExternalLinksContainer>
          <GithubLink href="https://github.com/s5zee/">
            <Github />
          </GithubLink>
          <LinkedInLink href="https://www.linkedin.com/">
            <LinkedIn />
          </LinkedInLink>
        </ExternalLinksContainer>
      }
    />
  </LetsTalkContainer>
);
