import { useContext, useEffect, useState } from "react";
import * as Styled from "./style";

import themeData from "../../Data/theme.json";

import MyContext from "../../context/MyContext";
import Screen from "../Screen";

export default function CalculatorScope() {
  const { theme } = useContext(MyContext);

  const [valueScreen, setValueScreen] = useState(0);
  const [screenOperators, setScreenOperators] = useState([]);

  useEffect(() => {

    const regNumber = /[0-9]/;
    // && regNumber.test(screenOperators)
    if (screenOperators.join("") !== "" ) {
        // console.log(screenOperators.join("") !== "");
        setValueScreen(screenOperators.join(""));
    }


  }, [screenOperators]);

  function handleValueScreen(value) {
    console.log(value);

    const regNumber = /[0-9]/;
    if (regNumber.test(value)) {
      setScreenOperators((screen) => [...screen, value]);
    } else {

    }

  }
  //   console.log(screenOperators);

  return (
    <Styled.Container className="center">
      <Screen value={valueScreen} />
      <Styled.ContainerContent bg={themeData[theme].backgrounds.screen}>
        <Styled.ContentButtons>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(7)}
          >
            <button>7</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(8)}
          >
            <button>8</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(9)}
          >
            <button>9</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover2}
            bg={themeData[theme].keys.Background}
            shadow={themeData[theme].keys.Shadow1}
            color={"hsl(0, 0%, 100%)"}
            onClick={() => handleValueScreen("del")}
          >
            <button>del</button>
          </Styled.ButtonCalculator>

          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(4)}
          >
            <button>4</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(5)}
          >
            <button>5</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(6)}
          >
            <button>6</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen("+")}
          >
            <button>+</button>
          </Styled.ButtonCalculator>

          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(1)}
          >
            <button>1</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(2)}
          >
            <button>2</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(3)}
          >
            <button>3</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen("-")}
          >
            <button>-</button>
          </Styled.ButtonCalculator>

          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(".")}
          >
            <button>.</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen(0)}
          >
            <button>0</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen("/")}
          >
            <button>/</button>
          </Styled.ButtonCalculator>
          <Styled.ButtonCalculator
            bgHover={themeData[theme].keys.backgroundHover}
            bg={themeData[theme].keys.background2}
            shadow={themeData[theme].keys.shadow3}
            color={themeData[theme].text.text1}
            onClick={() => handleValueScreen("x")}
          >
            <button>x</button>
          </Styled.ButtonCalculator>
        </Styled.ContentButtons>

        <Styled.ContainerResetOrEqual>
          <Styled.ButtonFinally
            bgHover={themeData[theme].keys.backgroundHover2}
            bg={themeData[theme].keys.Background}
            shadow={themeData[theme].keys.Shadow1}
            color={"hsl(0, 0%, 100%)"}
            onClick={() => handleValueScreen("reset")}
          >
            <button>reset</button>
          </Styled.ButtonFinally>

          <Styled.ButtonFinally
            bgHover={themeData[theme].keys.backgroundHover3}
            bg={themeData[theme].keys.BackgroundToggle}
            shadow={themeData[theme].keys.Shadow2}
            color={"white"}
            onClick={() => handleValueScreen("=")}
          >
            <button>=</button>
          </Styled.ButtonFinally>
        </Styled.ContainerResetOrEqual>
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
