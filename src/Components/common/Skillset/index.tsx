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
  itemsList: { content: string; id: number }[];
  ellipse: string;
}

export const SkillSet = ({
  title,
  titleIcon,
  itemsList,
  ellipse,
}: SkillSetProps) => {
  const itemList = itemsList;

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon>{titleIcon}</Icon>
      </Header>
      <List>
        {itemList.map(({ id, content }) => (
          <Paragraph key={id}>
            <img src={ellipse} alt="" />
            <ListItem>{content}</ListItem>
          </Paragraph>
        ))}
      </List>
    </Container>
  );
};
