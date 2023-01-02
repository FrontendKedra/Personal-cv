import styled from "styled-components";

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

export const TileList = styled.ul`
  margin-top: 32px;
  padding-left: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
    margin-top: 12px;
  }
`;

export const TileListItem = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  list-style: none;
  color: ${({theme})=> theme.colors.slateGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const TileParagraph = styled.p`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 16px;
  margin: 0;
`;
