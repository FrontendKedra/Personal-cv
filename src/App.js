import { SkillSet } from "./Components/common/SkillSet";
import { Introduction } from "./Components/features/Introduction";
import { Footer } from "./Components/features/Footer";
import { SkillSetList } from "./Components/features/SkillSetList";
import { ToLearnList } from "./Components/features/ToLearnList";
import { Portfolio } from "./Components/features/Porfolio";
import { AppContainer } from "./Components/features/AppContainer/styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { selectDarkBackground } from "./Components/features/Introduction/backgroundSlice";
import { useSelector } from "react-redux";
import toolsIcon from "./images/toolsIcon.svg";
import rocketIcon from "./images/rocketIcon.svg";

function App() {
  const darkBackground = useSelector(selectDarkBackground);
  return (
    <ThemeProvider theme={darkBackground ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Introduction />
        <SkillSet
          title={"My skill set includes"}
          titleIcon={<img src={toolsIcon} alt="tools icon" />}
          skillSetList={<SkillSetList />}
        />
        <SkillSet
          title={"What I want to learn next"}
          titleIcon={<img src={rocketIcon} alt="rocket icon" />}
          skillSetList={<ToLearnList />}
        />
        <Portfolio />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
