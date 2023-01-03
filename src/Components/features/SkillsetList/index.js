import { TileList, TileListItem, TileParagraph } from "../../common/Tile/styled";
import Eliipse from "../../../images/Eliipse.png";
import { skillSetItemList } from "./skillSetItemList";

export const SkillSetList = () => {
  const itemList = skillSetItemList;
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
