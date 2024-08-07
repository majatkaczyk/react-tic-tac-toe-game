import styled from "styled-components";

export const Board = styled.div`
  border-radius: 10px;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

export const Main = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Poppins";
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
