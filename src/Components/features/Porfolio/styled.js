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
  border: 6px solid #d1d5da4d;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);

  &:hover {
    border: 6px solid #0366d633;
  }
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

  &:hover {
    border-bottom: 1px solid #0366d6cc;
  }
`;

export const LoadingParagraph = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #252525;
  margin: 88px 0 48px 0;
`;

export const DangerParagraph = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #252525;
  margin: 24px 0 32px 0;
`;

export const GithubButton = styled.button`
  background-color: #0366d6;
  text-decoration: none;
  font-weight: 600;
  font-size: 20.0584px;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(209, 213, 218, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  max-width: 168px;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff;
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
  color: #252525;
  margin-bottom: 32px;
  text-align: center;
`;

export const IconParagraph = styled.p`
  margin: 96px 0 0 0;
`;
