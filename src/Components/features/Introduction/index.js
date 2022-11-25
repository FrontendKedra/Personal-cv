import {
  IntroductionContainer,
  IntroductionEnvelope,
  IntroductionImage,
  ToggleBackgroundButton,
  BackgroundButtonText,
  Span,
  IntroductionEmailLink,
  BasicInfoContainer,
  IntroductionParagraph,
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
        title={<IntroductionParagraph>This is</IntroductionParagraph>}
        headerContent={<IntroductionHeader>Szymon Kędra</IntroductionHeader>}
        body={
          <IntroductionText>
            I'm a begineer frontend developer, currently seeking new job and
            learning experiences.
          </IntroductionText>
        }
        emailButton={
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
