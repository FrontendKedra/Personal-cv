import { Skillset } from "./Components/common/Skillset";
import { Introduction } from "./Components/features/Introduction";
import { LetsTalk } from "./Components/features/LetsTalk";
import { SkillsetList } from "./Components/features/SkillsetList";
import { ToLearnList } from "./Components/features/ToLearnList";
import { Portfolio } from "./Components/features/Porfolio";
import { AppContainer } from "./Components/features/AppContainer/styled";

function App() {
  return (
    <AppContainer>
      <Introduction />
      <Skillset
        title={"My Skillset includes"}
        titleIcon={"🛠️"}
        skillSetList={<SkillsetList />}
      />
      <Skillset
        title={"What I want to learn next"}
        titleIcon={"🚀"}
        skillSetList={<ToLearnList />}
      />
      <Portfolio />
      <LetsTalk />
    </AppContainer>
  );
}

export default App;
