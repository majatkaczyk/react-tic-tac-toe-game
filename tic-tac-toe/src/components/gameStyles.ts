import styled from "styled-components";

export const Board = styled.div`
  width: 50vmin;
  height: 50vmin;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
`;

export const Main = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Poppins";
  background: #244856;
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #f9f3ea;
`;

export const Tile = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8vmin;
  background: #80acac;
  border-style: solid;
  border-color: #f9f3ea;
  border-width: 0.1rem;
`;

export const BigContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 50vmin;
  width: 55vmin;
`;

export const Header = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
`;

export const SubHeader = styled.div`
  font-size: 0.8rem;
  font-weight: 100;
`;

export const Button = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20vmin;
`;
