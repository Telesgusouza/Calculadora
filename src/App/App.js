import * as Styled from "./style";
import themeData from "../Data/theme.json";
import Header from "../components/Header";
import MyContext from "../context/MyContext";
import { useState } from "react";
import CalculatorScope from "../components/CalculatorScope";

function App() {
  const [theme, setTheme] = useState("dark");


  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <Styled.Container 
      bg={themeData[theme].backgrounds.main}>
        <Header />
        <CalculatorScope  />
      </Styled.Container>
    </MyContext.Provider>
  );
}

export default App;
