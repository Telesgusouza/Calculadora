import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.color};

  h3 {
    margin-top: 6px;
  }

  div {
    display: block;
    transition: all 0.2s ease-in-out;
  }

  h3 {
    margin-right: 15px;
    text-transform: uppercase;
    font-size: 0.85em;
    transition: all 0.2s ease-in-out;
  }

  p {
    font-size: 0.8em;
    word-spacing: 14px;
    margin-bottom: 3px;
    padding: 0 5px;
  }

  transition: all 0.2s ease-in-out;
`;

export const text = styled.div`
  display: flex;
  width: 60px;
  padding: 0 5px;

  position: relative;

  p {
    width: 60px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
  }

  h5 {
    font-size: 1.1em;
    position: relative;

    text-align: center;
    width: 33%;
    height: 35px;
    z-index: 20;

    cursor: pointer;
  }
`;

export const theme = styled.div`
  background-color: ${(props) => props.bg};

  padding: 3px;
  border-radius: 50px;

  position: relative;
  top: 17px;

  cursor: pointer;
  transition: all 0.8s ease-in-out;

  div {
    width: 14px;
    height: 14px;

    border-radius: 50%;

    background-color: ${(props) => props.bgCircle};

    position: relative;
    left: ${(props) => props.position}%;

    transition: all 0.3s ease-in-out;
  }
`;
