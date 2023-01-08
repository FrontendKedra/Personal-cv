import styled from "styled-components";
import { ReactComponent as iconSpinner } from "./icon-spinner.svg";

export const LoadingParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 88px 0 48px 0;
`;

export const Icon = styled(iconSpinner)`
  animation: rotation 1s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
