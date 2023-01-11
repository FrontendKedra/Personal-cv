import {
  Container,
  Icon,
  List,
  Paragraph,
  ListItem,
  Title,
  Header,
} from "./styled";

export const SkillSet = ({ title, titleIcon, itemsList, ellipse }) => {
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
