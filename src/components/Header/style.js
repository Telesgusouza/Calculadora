import styled from "styled-components";

export const Container = styled.header`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  color: ${props=>props.color};
  transition: all .18s ease-in-out;

  @media (max-width: 375px) {
    margin-top: 30px;
  }
`;
