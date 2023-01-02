import { TileList, TileListItem, TileParagraph } from "../../common/Tile/styled";
import Eliipse from "../../../images/Eliipse.png";
import { skillsetItemList } from "./skillsetItemList";

export const SkillsetList = () => {
  const itemList = skillsetItemList;
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
