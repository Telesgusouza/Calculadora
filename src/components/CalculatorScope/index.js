import { useContext, useEffect, useState } from "react";
import * as Styled from "./style";

import themeData from "../../Data/theme.json";

import MyContext from "../../context/MyContext";
import Screen from "../Screen";

export default function CalculatorScope() {
  const { theme } = useContext(MyContext);

  const [resultSave, setResultSave] = useState(null);

  const [valueScreen, setValueScreen] = useState([]);
  const [saveOperator, setSaveOperator] = useState([]);

  const [screenOperators, setScreenOperators] = useState([]);

  useEffect(() => {
    const regNumber = /[0-9]/;
    let saveValueScreen = valueScreen;
    let lastOperator = screenOperators[screenOperators.length - 1];

    if (regNumber.test(lastOperator) || screenOperators.length === 0) {
      setValueScreen(saveOperator.join(""));
    }
  }, [screenOperators]);

  function operators(value) {
    const regNumber = /[0-9]/;
    let lastOperator = screenOperators[screenOperators.length - 1];

    // Operadores
    if (screenOperators.length > 0 && value === "del") {
      // tirando 1 operador da tela
      let arraysaveOperator = saveOperator;
      arraysaveOperator.pop();
      setSaveOperator(arraysaveOperator);

      setValueScreen(saveOperator.join(""));

      let arrayOperators = screenOperators;
      if (!regNumber.test(lastOperator)) {
        arrayOperators.pop();
        arrayOperators.pop();

        setScreenOperators(arrayOperators);

        return;
      }
      arrayOperators.pop();

      setScreenOperators(arrayOperators);
    }

    if (screenOperators.length > 0 && value === "reset") {
      setValueScreen([]);
      setSaveOperator([]);
      setScreenOperators([]);
    }

    if (regNumber.test(lastOperator) && value !== "del" && value !== "reset") {
      setScreenOperators((operators) => [...operators, value]);
      setSaveOperator([]);
    }

    if (screenOperators.length > 0 && value === "=") {
      if (regNumber.test(lastOperator)) {
        let resolve = eval(screenOperators.join(""));
        setResultSave(resolve);

        setValueScreen(resolve);
      } else {
        let arrayOperators = screenOperators;
        arrayOperators.pop();
        setScreenOperators(arrayOperators);

        let resolve = eval(screenOperators.join(""));
        setResultSave(resolve);

        setScreenOperators([]);

        setValueScreen(resolve);
      }
    }
  }

  console.log(screenOperators);

  function handleValueScreen(value) {
    const regNumber = /[0-9]/;

  
    if (regNumber.test(value)) {

      if (resultSave !== null) {
        setScreenOperators([]);
        setResultSave(null);
      }

      setSaveOperator((operators) => [...operators, value]);
      setScreenOperators((operators) => [...operators, value]);
      
    } else {
      if (resultSave !== null) {
        setScreenOperators([resultSave, value]);
        setResultSave(null);
      }

      operators(value);
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
            onClick={() => handleValueScreen("*")}
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
