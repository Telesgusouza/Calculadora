import { useContext, useEffect, useState } from "react";
import * as Styled from "./style";

import themeData from "../../Data/theme.json";

import MyContext from "../../context/MyContext";
import Screen from "../Screen";

export default function CalculatorScope() {
  const { theme } = useContext(MyContext);

  const [valueScreen, setValueScreen] = useState([]);
  const [saveOperator, setSaveOperator] = useState([]);

  const [screenOperators, setScreenOperators] = useState([]);

  useEffect(() => {
    const regNumber = /[0-9]/;
    let saveValueScreen = valueScreen;
    let lastOperator = screenOperators[screenOperators.length - 1];

    // console.log('saveOperator', saveOperator);
    // console.log('valueScreen', valueScreen);
    // console.log('screenOperators', screenOperators);
    // console.log('');
    // console.log(regNumber.test(lastOperator) || screenOperators.length === 0 || lastOperator !== 'del');

    // console.log(lastOperator)

    

    if (regNumber.test(lastOperator) || screenOperators.length === 0) {
      setValueScreen(saveOperator.join(""));
    } else if (!regNumber.test(lastOperator) && lastOperator !== "del") {
      // setSaveOperator([]);
      // // console.log('apenas operadores')
      // switch(lastOperator) {
      //     case '=': {
      //         // console.log('pressionado =')
      //         break
      //     }
      //     case 'reset': {
      //         // console.log('pressionado reset')
      //         break
      //     }
      //     default: {
      //         // console.log('outros operadores')
      //     }
      // }
    }
  }, [screenOperators]);

  function operators(value) {
    const regNumber = /[0-9]/;
    let lastOperator = screenOperators[screenOperators.length - 1];

    if (screenOperators.length > 0 && value === "del") {
      console.log("não ta chegando nesse caraio");

      let arrayOperators = screenOperators;
      arrayOperators.pop();
      setScreenOperators(arrayOperators);


      let arraysaveOperator = saveOperator;
      arraysaveOperator.pop(); 
      setSaveOperator(arraysaveOperator);

      setValueScreen(saveOperator.join(''));
    }

    if (regNumber.test(lastOperator) && value !== "del") {
      setScreenOperators((operators) => [...operators, value]);
    }
  }

  function handleValueScreen(value) {
    const regNumber = /[0-9]/;

    let lastOperator = screenOperators[screenOperators.length - 1];

    if (regNumber.test(value)) {
      setSaveOperator((operators) => [...operators, value]);
      setScreenOperators((operators) => [...operators, value]);
    } else {
      operators(value);

      //   if (regNumber.test(lastOperator)) {
      //     setScreenOperators((operators) => [...operators, value]);
      //   }
    }
  }

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
