import { Lists } from "../../../@types/listsTypes";
import {
  Container,
  Icon,
  List,
  Paragraph,
  ListItem,
  Title,
  Header,
} from "./styled";

interface SkillSetProps {
  title: string;
  titleIcon: JSX.Element;
  itemsList: Lists[];
  ellipse: string;
}

export const SkillSet = ({
  title,
  titleIcon,
  itemsList,
  ellipse,
}: SkillSetProps) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      <Icon>{titleIcon}</Icon>
    </Header>
    <List>
      {itemsList.map(({ id, content }) => (
        <Paragraph key={id}>
          <img src={ellipse} alt="" />
          <ListItem>{content}</ListItem>
        </Paragraph>
      ))}
    </List>
  </Container>
);
