import { Container } from "../Container";
import { Header, Icon, List, ListItem, Paragraph, Tile } from "../Tile/styled";
import Eliipse from "../../images/Eliipse.png";
export const Skillset = () => (
  <Container>
    <Tile>
      <Header>My Skillset includes</Header>
      <Icon>🛠️</Icon>
    </Tile>
    <List>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Semantic & accessible HTML</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>React Router</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Promises, Async/Await</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Responsive Web Design</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Redux-Saga</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>GitHub Pull Requests & Review</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Teamwork</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Redux (Toolkit)</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Trello</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Markdown</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>React Hooks</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Scrum</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Immutability</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Error handling</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>NPM</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>CSS BEM convention</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Working with API (fetch, axios)</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>React</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>CSS Grid</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>JavaScript: ES6+</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>Git</ListItem>
      </Paragraph>
      <Paragraph>
        <img src={Eliipse} alt="" />
        <ListItem>CSS Flexbox</ListItem>
      </Paragraph>
    </List>
  </Container>
);
