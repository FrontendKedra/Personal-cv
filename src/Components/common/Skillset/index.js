import { Container } from "../../features/Container";
import { TileHeader, TileIcon, Tile } from "../../features/Tile/styled";

export const Skillset = ({ title, titleIcon, skillSetList }) => (
  <Container>
    <Tile>
      <TileHeader>{title}</TileHeader>
      <TileIcon>{titleIcon}</TileIcon>
    </Tile>
    {skillSetList}
  </Container>
);
