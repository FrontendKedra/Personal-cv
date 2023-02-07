import { SkillSet } from "./Components/common/SkillSet";
import { Introduction } from "./Components/features/Introduction";
import { Footer } from "./Components/features/Footer";
import { Portfolio } from "./Components/features/Porfolio";
import { AppContainer } from "./Components/features/AppContainer/styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { selectDarkBackground } from "./Components/features/Introduction/backgroundSlice";
import { useSelector } from "react-redux";
import toolsIcon from "./images/toolsIcon.svg";
import rocketIcon from "./images/rocketIcon.svg";
import eliipse from "./images/eliipse.png";
import { toLearnItemList } from "./Components/features/SkillSetLists/toLearnItemList";
import { skillSetItemList } from "./Components/features/SkillSetLists/skillSetItemList";

function App() {
  const darkBackground = useSelector(selectDarkBackground);
  const toolsIconPath: string = toolsIcon;
  const rocketIconPath: string = rocketIcon;
  const eliipsePath: string = eliipse;

  return (
    <ThemeProvider theme={darkBackground ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <Introduction />
        <SkillSet
          title={"My skill set includes"}
          titleIcon={<img src={toolsIconPath} alt="tools icon" />}
          ellipse={eliipsePath}
          itemsList={skillSetItemList}
        />
        <SkillSet
          title={"What I want to learn next"}
          titleIcon={<img src={rocketIconPath} alt="rocket icon" />}
          ellipse={eliipsePath}
          itemsList={toLearnItemList}
        />
        <Portfolio />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
