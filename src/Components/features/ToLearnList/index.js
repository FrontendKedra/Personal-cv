import { TileList, TileParagraph, TileListItem } from "../Tile/styled";
import Eliipse from "../../../images/Eliipse.png";

export const ToLearnList = () => {
  const toLearnItemList = [
    { content: "React Query", id: 25 },
    { content: "TypeScript", id: 26 },
    { content: "JS classes", id: 27 },
  ];
  return (
    <TileList>
      {toLearnItemList.map(({ id, content }) => (
        <TileParagraph>
          <img src={Eliipse} alt="" />
          <TileListItem key={id}>{content}</TileListItem>
        </TileParagraph>
      ))}
    </TileList>
  );
};
