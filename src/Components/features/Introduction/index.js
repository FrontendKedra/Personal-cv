import {
  IntroductionContainer,
  IntroductionEnvelope,
  IntroductionImage,
  ToggleBackgroundButton,
  BackgroundButtonText,
  Span,
  IntroductionEmailLink,
  BasicInfoContainer,
  HeaderParagraph,
  IntroductionHeader,
  IntroductionText,
} from "./styled";
import tako from "../../../images/tako.png";
import { BasicInfo } from "../../common/BasicInfo";
import envelope from "../../../images/envelope.png";
import toggle from "../../../images/toggle.png";

export const Introduction = () => (
  <IntroductionContainer>
    <IntroductionImage src={tako} alt=""></IntroductionImage>
    <BasicInfoContainer>
      <BasicInfo
        title={<HeaderParagraph>This is</HeaderParagraph>}
        headerContent={<IntroductionHeader>Szymon Kędra</IntroductionHeader>}
        body={
          <IntroductionText>
            I'm a begineer frontend developer, currently seeking new job and
            learning experiences.
          </IntroductionText>
        }
        linkButton={
          <IntroductionEmailLink href="mailto:s5zee@wp.pl">
            {" "}
            <IntroductionEnvelope
              src={envelope}
              alt=""
            ></IntroductionEnvelope>{" "}
            Hire Me
          </IntroductionEmailLink>
        }
      />
    </BasicInfoContainer>
    <Span>
      <BackgroundButtonText>Dark mode off</BackgroundButtonText>
      <ToggleBackgroundButton>
        {<img src={toggle} alt=""></img>}
      </ToggleBackgroundButton>
    </Span>
  </IntroductionContainer>
);
