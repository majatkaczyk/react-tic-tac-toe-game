import styled from "styled-components";

export const Board = styled.div`
  width: 50vmin;
  height: 50vmin;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
  padding: 0.3rem;
  border-radius: 2px;
`;

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Poppins";
  background: #244856;
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 1rem;
`;

export const Header = styled.div`
  font-size: 1.9rem;
  font-weight: 800;
  color: #f9f3ea;
  padding-bottom: 3rem;
  padding-top: 5rem;
`;

export const SubHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vmin;
  width: 50vmin;
`;

export const Box = styled.div`
  width: 100%;
  height: 6vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #80acac;
  border-radius: 2px;
`;

export const Tile = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background: #80acac;
  border-style: solid;
  border-color: #f9f3ea;
  border-width: 0.1rem;
  border-radius: 2px;
`;

export const Button = styled.button`
  border-radius: 2px;
  border: solid;
  cursor: pointer;
  border-color: #f9f3ea;
  border-width: 0.05rem;
  width: 50%;
  height: 6vmin;
  align-self: flex-end;
  color: #f9f3ea;
  background: none;
  margin-top: 1vh;
  font-size: 1.2rem;
  font-weight: 100;
`;
