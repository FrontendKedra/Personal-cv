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
`;

export const Span = styled.span`
  margin-top: 8px;
  font-weight: 400;
  font-size: 20px;
  color: #252525;
`;

export const GithubReposContainer = styled.div`
  max-width: 1216px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 24px;
`;

export const RepositoryContainer = styled.div`
  padding: 56px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
  gap: 24px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const RepositoryHeader = styled.header`
  font-weight: 700;
  font-size: 24px;
  color: #0366d6;
`;

export const Description = styled.article`
  font-weight: 400;
  font-size: 18px;
  color: #6e7e91;
`;

export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  gap: 8px;
`;

export const RepositoryLink = styled.a`
  color: #0366d6;
  border-bottom: 1px solid #9999ff;
  text-decoration: none;
`;
