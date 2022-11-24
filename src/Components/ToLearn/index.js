import { Container } from "../Container";
import { Header, Icon, List, ListItem, Paragraph, Tile } from "../Tile/styled";
import Eliipse from "../../images/Eliipse.png";

export const ToLearn = () => (
  <Container>
    <Tile>
      <Header>What I want to learn next</Header>
      <Icon>🚀</Icon>
    </Tile>
    <List>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>React Query</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>TypeScript</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>JS classes</ListItem>
      </Paragraph>
    </List>
  </Container>
);
