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
import authorImage from "./images/cvImage.png";
import envelope from "./images/envelope.svg";
import { HeaderParagraph } from "../../common/styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkBackground, toggleBackgroundColor } from "./backgroundSlice";

export const Introduction = () => {
  const dispatch = useDispatch();
  const darkBackground = useSelector(selectDarkBackground);

  return (
    <IntroductionContainer>
      <IntroductionImage src={authorImage} alt=""></IntroductionImage>
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
        <BackgroundButtonText>
          {darkBackground ? `Dark mode on` : `Dark mode off`}
        </BackgroundButtonText>
        <ToggleBackgroundButton
          onClick={() => dispatch(toggleBackgroundColor())}
        >
          <Img darkBackground={darkBackground} />
        </ToggleBackgroundButton>
      </Span>
    </IntroductionContainer>
  );
};
