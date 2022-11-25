import { Skillset } from "./Components/common/Skillset";
import { Introduction } from "./Components/features/Introduction";
import { SkillsetList } from "./Components/features/SkillsetList";
import { ToLearnList } from "./Components/features/ToLearnList";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
