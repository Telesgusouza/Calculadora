import styled from "styled-components";
import theme from "../Data/theme.json";

export const Container = styled.div`
  background-color: ${(props) => props.bg};
  min-height: 100vh;
  padding: 15px;
  padding-top: 1px;
`;
