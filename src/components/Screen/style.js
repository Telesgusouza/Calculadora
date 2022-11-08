import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.bg};
  padding: 25px 20px;
  color: ${(props) => props.color};
  border-radius: 9px;

  transition: all .2s ease-in-out;

  h2 {
    font-size: 3em;
    text-align: right;
    transition: all .2s ease-in-out;
  }

`;

