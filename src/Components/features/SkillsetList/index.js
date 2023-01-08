import {
  List,
  ListItem,
  Paragraph,
} from "../../common/Skills/styled";
import Eliipse from "../../../images/eliipse.png";
import { skillSetItemList } from "./skillSetItemList";

export const SkillSetList = () => {
  const itemList = skillSetItemList;
  return (
    <List>
      {itemList.map(({ id, content }) => (
        <Paragraph key={id}>
          <img src={Eliipse} alt="" />
          <ListItem>{content}</ListItem>
        </Paragraph>
      ))}
    </List>
  );
};
