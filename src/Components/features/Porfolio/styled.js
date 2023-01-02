import styled from "styled-components";

export const PortfolioContainer = styled.div`
  max-width: 1200px;
  display: grid;
  justify-items: center;
`;

export const PortfolioParagraph = styled.p`
  font-weight: 900;
  font-size: 30px;
  margin: 0;
  padding-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Span = styled.span`
  margin-top: 8px;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mineShaft};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 17px;
    line-height: 140%;
    margin-top: 16px;
  }
`;

export const GithubReposContainer = styled.div`
  max-width: 1216px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

export const RepositoryContainer = styled.div`
  padding: 56px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
  gap: 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 6px solid ${({ theme }) => theme.colors.iron};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);

  &:hover {
    transition: 0.3s;
    border: 6px solid ${({ theme }) => theme.colors.anakiwa};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 16px;
    padding: 18px;
  }
`;

export const RepositoryHeader = styled.header`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.scienceBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Description = styled.article`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.slateGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  gap: 8px;
`;

export const RepositoryLink = styled.a`
  color: ${({ theme }) => theme.colors.scienceBlue};
  border-bottom: 1px solid #9999ff;
  text-decoration: none;

  &:hover {
    transition: 0.3s;
    border-bottom: 1px solid ${({ theme }) => theme.colors.scienceBlue};
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const LoadingParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 88px 0 48px 0;
`;

export const DangerParagraph = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin: 24px 0 32px 0;
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

  &:hover {
    transition: 0.3s;
    box-shadow: 2px -2px 0px ${({ theme }) => theme.colors.anakiwa},
      -2px 2px 0px ${({ theme }) => theme.colors.anakiwa};
  }
`;

export const Icon = styled.p`
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

export const ErrorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const ErrorText = styled.article`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin-bottom: 32px;
  text-align: center;
`;

export const IconParagraph = styled.p`
  margin: 96px 0 0 0;
`;
