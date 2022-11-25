import styled from "styled-components";

export const IntroductionContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: auto 4fr auto;
  margin-bottom: 64px;
`;

export const IntroductionImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  padding: 5px;
  margin-right: 66px;
`;

export const IntroductionParagraph = styled.p`
  color: #6e7e91;
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;

export const IntroductionHeader = styled.header`
  font-weight: 900;
  font-size: 38px;
  color: #252525;
`;

export const IntroductionText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-top: 36px;
  color: #6e7e91;
`;

export const IntroductionEnvelope = styled.img`
  width: 19.23px;
  height: 17.12px;
`;

export const IntroductionEmailLink = styled.a`
  font-weight: 600;
  font-size: 20.0584px;
  color: #ffffff;
  background-color: #0366d6;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 12px 16px;
  border: 1px solid #d1ff64d9;
  max-width: 154px;
  border-radius: 4px;
  margin-top: 32px;
  text-decoration: none;
`;

export const ToggleBackgroundButton = styled.button`
  background-color: #d1d5da;
  border: 1px solid #808080;
  width: 47.06px;
  height: 25.07px;
  border-radius: 30px;
`;

export const BackgroundButtonText = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: #6e7e91;
  text-transform: uppercase;
`;

export const Span = styled.span`
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  gap: 16px;
  align-items: center;
`;

export const BasicInfoContainer = styled.div`
  display: grid;
  align-items: center;
`;
