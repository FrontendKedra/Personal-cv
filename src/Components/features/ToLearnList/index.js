import { TileList, TileParagraph, TileListItem } from "../../common/Tile/styled";
import Eliipse from "../../../images/Eliipse.png";
import { toLearnItemList } from "./toLearnItemList";

export const ToLearnList = () => {
  const itemList = toLearnItemList;
  return (
    <TileList>
      {itemList.map(({ id, content }) => (
        <TileParagraph key={id}>
          <img src={Eliipse} alt="" />
          <TileListItem>{content}</TileListItem>
        </TileParagraph>
      ))}
    </TileList>
  );
};
