import {
  IntroductionContainer,
  IntroductionEnvelope,
  IntroductionImage,
  ToggleBackgroundButton,
  BackgroundButtonText,
  Span,
  IntroductionEmailLink,
  BasicInfoContainer,
  IntroductionHeader,
  IntroductionText,
  Img,
} from "./styled";
import tako from "../../../images/tako.png";
import envelope from "../../../images/envelope.svg";
import Toggle from "../../../images/Toggle.svg";
import { HeaderParagraph } from "../../common/styled";
import { useDispatch } from "react-redux";
import { toggleBackgroundColor } from "./backgroundSlice";

export const Introduction = () => {
  const dispatch = useDispatch();

  return (
    <IntroductionContainer>
      <IntroductionImage src={tako} alt=""></IntroductionImage>
      <BasicInfoContainer>
        <HeaderParagraph>This is</HeaderParagraph>
        <IntroductionHeader>Szymon Kędra</IntroductionHeader>
        <IntroductionText>
          I'm a begineer frontend developer, currently seeking new job and
          learning experiences.
        </IntroductionText>
        <IntroductionEmailLink href="mailto:s5zee@wp.pl">
          <IntroductionEnvelope src={envelope} alt=""></IntroductionEnvelope>
          Hire Me
        </IntroductionEmailLink>
      </BasicInfoContainer>
      <Span>
        <BackgroundButtonText>Dark mode off</BackgroundButtonText>
        <ToggleBackgroundButton
          onClick={() => dispatch(toggleBackgroundColor())}
        >
          <Img src={Toggle} alt=""></Img>
        </ToggleBackgroundButton>
      </Span>
    </IntroductionContainer>
  );
};
