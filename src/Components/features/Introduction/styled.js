import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as toggle } from "./images/toggle.svg";

export const IntroductionContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: auto 4fr auto;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: auto 1fr;
    margin-bottom: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 48px;
  }
`;

export const IntroductionImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 70%;
    margin-top: 32px;
  }
`;

export const BasicInfoContainer = styled.div`
  display: grid;
  margin-left: 66px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-row-start: 2;
    margin-left: 0;
  }
`;

export const IntroductionHeader = styled.header`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.mineShaft};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 26px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 22px;
  }
`;

export const IntroductionText = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-top: 36px;
  color: ${({ theme }) => theme.colors.slateGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 16px;
  }
`;

export const IntroductionEmailLink = styled.a`
  font-weight: 600;
  font-size: 20.0584px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  max-width: fit-content;
  border-radius: 4px;
  margin-top: 32px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hoverShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 24px;
    font-size: 18px;
    gap: 14px;
  }
`;

export const IntroductionEnvelope = styled.img`
  width: 120%;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 85%;
  }
`;

export const Span = styled.span`
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  gap: 16px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 24px;
  }
`;

export const BackgroundButtonText = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.slateGray};
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const ToggleBackgroundButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.slateGray};
  width: 47.06px;
  height: 25.07px;
  border-radius: 30px;
  display: grid;
  align-content: center;
  cursor: pointer;
`;

export const Img = styled(toggle)`
  background-color: ${({ theme }) => theme.colors.slateGray};
  transition: 0.3s;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 2px;
  transform: translateX(-22%);
  width: 18px;
  height: auto;
  color: ${({ theme }) => theme.colors.buttonWhite};

  ${({ darkBackground }) =>
    darkBackground &&
    css`
      transform: translateX(100%);
    `}
`;
