import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1216px;
  margin: auto;
  padding: 110px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 50px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 36px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 0 16px;
  }
`;
