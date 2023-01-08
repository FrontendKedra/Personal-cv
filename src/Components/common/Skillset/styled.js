import styled from "styled-components";

export const Container = styled.div`
  border-radius: 4px;
  background: ${({theme}) => theme.colors.white};
  max-width: 1216px;
  padding: 32px;
  margin-bottom: 72px;
`;

export const Tile = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({theme}) => theme.colors.iron};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding-bottom: 12px;
  }
`;

export const TileHeader = styled.header`
  font-weight: 900;
  font-size: 30px;
  color: ${({theme}) => theme.colors.mineShaft};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const TileIcon = styled.p`
  margin: 0 0 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin: 0 0 0 12px;
  }
`;
