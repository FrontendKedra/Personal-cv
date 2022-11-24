import { TileList, TileListItem, TileParagraph } from "../Tile/styled";
import Eliipse from "../../../images/Eliipse.png";

export const SkillsetList = () => {
  const itemTileList = [
    { content: "Semantic & accessible HTML", id: 1 },
    { content: "React Router", id: 2 },
    { content: "Promises, Async/Await", id: 3 },
    { content: "Responsive Web Design", id: 4 },
    { content: "Redux-Saga", id: 5 },
    { content: "GitHub Pull Requests & Review", id: 6 },
    { content: "Teamwork", id: 7 },
    { content: "Redux (Toolkit)", id: 8 },
    { content: "Trello", id: 9 },
    { content: "Markdown", id: 10 },
    { content: "React Hooks", id: 11 },
    { content: "Scrum", id: 12 },
    { content: "Immutability", id: 13 },
    { content: "Error handling", id: 14 },
    { content: "NPM", id: 15 },
    { content: "CSS BEM convention", id: 16 },
    { content: "Working with API (fetch, axios)", id: 17 },
    { content: "React", id: 18 },
    { content: "CSS Grid", id: 19 },
    { content: "JavaScript: ES6+", id: 20 },
    { content: "Git", id: 21 },
    { content: "CSS Flexbox", id: 22 },
  ];

  return (
    <TileList>
      {itemTileList.map(({ id, content }) => (
        <TileParagraph>
          <img src={Eliipse} alt="" />
          <TileListItem key={id}>{content}</TileListItem>
        </TileParagraph>
      ))}
    </TileList>
  );
};
