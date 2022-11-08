import styled from "styled-components";

export const Container = styled.main`
  margin-top: 50px;
`;

export const ContainerContent = styled.div`
  background-color: ${(props) => props.bg};

  margin-top: 22px;
  padding: 20px;
  border-radius: 9px;

  transition: all 0.2s ease-in-out;

  /* div {
  } */
`;

export const ContentButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const ButtonCalculator = styled.div`
  width: 100%;
  background-color: black;
  background-color: ${(props) => props.shadow};
  height: 55px;
  border-radius: 11px;

  transition: all 0.2s ease-in-out;

  position: relative;

  button {
    position: absolute;

    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    /* color: ; */

    width: 100%;
    height: 92%;
    border-radius: 10px;
    border: none;

    text-transform: uppercase;
    font-size: 1.7em;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${props=>props.bgHover};
      /* filter: grayscale(50%); */
    }
  }
`;

export const ContainerResetOrEqual = styled.div`
  margin-top: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const ButtonFinally = styled.button`
  background-color: ${(props) => props.shadow};
  width: 100%;
  margin-right: 7px;
  height: 55px;
  border: none;

  border-radius: 11px;


  transition: all 0.2s ease-in-out;
  position: relative;

  button {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    border: none;

    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};

    width: 100%;
    height: 92%;
    border-radius: 10px;
    border: none;

    text-transform: uppercase;
    font-size: 1.7em;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${props=>props.bgHover};
    }
  }
`;
