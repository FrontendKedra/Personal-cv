import {
  List,
  Paragraph,
  ListItem,
} from "../../common/Skills/styled";
import Eliipse from "../../../images/eliipse.png";
import { toLearnItemList } from "./toLearnItemList";

export const ToLearnList = () => {
  const itemList = toLearnItemList;
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
