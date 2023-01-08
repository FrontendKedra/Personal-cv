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
  color: ${({ theme }) => theme.colors.mineShaft};

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
  border: 6px solid ${({ theme }) => theme.colors.gray};
  box-shadow: 0px -2px 50px ${({ theme }) => theme.colors.violet},
    0px 16px 58px ${({ theme }) => theme.colors.darkerViolet};

  &:hover {
    transition: 0.3s;
    border: 6px solid ${({ theme }) => theme.colors.lightBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 28px;
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
  height: max-content;
`;

export const RepositoryLink = styled.a`
  color: ${({ theme }) => theme.colors.scienceBlue};
  border-bottom: 1px solid ${({ theme }) => theme.colors.scienceBlue};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.melrose};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
    line-height: 17px;
  }
`;
