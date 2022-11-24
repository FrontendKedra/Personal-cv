import styled from "styled-components";

export const Tile = styled.article`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #d1d5da4d;
`;

export const TileHeader = styled.header`
  font-weight: 900;
  font-size: 30px;
`;

export const TileIcon = styled.p`
  margin-left: 16px;
`;

export const TileList = styled.ul`
  margin-top: 32px;
  padding-left: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const TileListItem = styled.li`
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  list-style: none;
  color: #6e7e91;
`;

export const TileParagraph = styled.p`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 16px;
  margin: 0;
`;
