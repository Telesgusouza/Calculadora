import { useContext } from "react";
import MyContext from "../../context/MyContext";
import themeData from '../../Data/theme.json';
import * as Styled from "./style";

export default function OptionTheme() {
  const { theme, setTheme } = useContext(MyContext);

  function handleTheme(Theme) {
    setTheme(Theme);
  }

  return (
    <Styled.Container
    color={theme === 'dark' ? 'white' : themeData[theme].text.text1}
    >
      <h3>theme</h3>
      <div>
        <Styled.text>
          <p>
            <h5 onClick={() => handleTheme("dark")}>1</h5>
            <h5 onClick={() => handleTheme("light")}>2</h5>
            <h5 onClick={() => handleTheme("veryDark")}>3</h5>
          </p>
        </Styled.text>
        
        <Styled.theme 
        position={themeData[theme].position}
        bg={themeData[theme].backgrounds.toggle}
        bgCircle={themeData[theme].keys.BackgroundToggle}
        >
          <div></div>
        </Styled.theme>
      </div>
    </Styled.Container>
  );
}
