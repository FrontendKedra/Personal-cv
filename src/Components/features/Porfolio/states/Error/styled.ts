import styled from "styled-components";
import { ReactComponent as dangerIcon } from "./danger.svg"

export const ErrorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const DangerIcon = styled(dangerIcon)`
  margin: 96px 0 0 0;
`;

export const DangerParagraph = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 24px 0 32px 0;
`;

export const ErrorText = styled.article`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin-bottom: 32px;
  text-align: center;
`;

export const GithubButton = styled.button`
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  text-decoration: none;
  font-weight: 600;
  font-size: 20.0584px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(209, 213, 218, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  max-width: 168px;
  transition: 0.3s;

  &:hover {
    box-shadow: 2px -2px 0px ${({ theme }) => theme.sharedColors.anakiwa},
      -2px 2px 0px ${({ theme }) => theme.sharedColors.anakiwa};
  }
`;
