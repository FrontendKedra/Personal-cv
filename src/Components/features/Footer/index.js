import {
  EmailAdress,
  Text,
  Container,
  Link,
  ExternalLinksContainer,
} from "./styled";
import { ReactComponent as Github } from "./icons/github.svg";
import { ReactComponent as LinkedIn } from "./icons/linkedIn.svg";
import { HeaderParagraph } from "../../common/HeaderParagraph/styled";

export const Footer = () => (
  <Container>
    <HeaderParagraph>Lets talk!</HeaderParagraph>
    <EmailAdress href="mailto:kedfrontend@gmail.com">
      kedfrontend@gmail.com
    </EmailAdress>
    <Text>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to contact me
    </Text>
    <ExternalLinksContainer>
      <Link href="https://github.com/frontendkedra/">
        <Github />
      </Link>
      <Link href="https://www.linkedin.com/in/kedrafrontend/">
        <LinkedIn />
      </Link>
    </ExternalLinksContainer>
  </Container>
);
