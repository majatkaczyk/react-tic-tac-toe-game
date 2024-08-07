import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  width: 50vmin;
  height: 50vmin;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-column-gap: 0.25rem;
  grid-row-gap: 0.25rem;
  padding: 0.3rem;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 90vmin;
    height: 90vmin;
  }
`;

export const Main = styled.div`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
  font-family: "Poppins";
  background: #244856;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.div`
  font-size: 1.9rem;
  font-weight: 800;
  color: #f9f3ea;
  padding-bottom: 3rem;
  padding-top: 5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const SubHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
  height: 80vmin;
  width: 50vmin;

  @media (max-width: 768px) {
    width: 90vmin;
    height: auto;
  }
`;

export const Box = styled.div`
  ${flexCenter}
  width: 100%;
  height: 6vmin;
  background: #80acac;
  border-radius: 2px;

  @media (max-width: 768px) {
    height: 8vmin;
  }
`;

export const Tile = styled.button`
  ${flexCenter}
  flex: 1;
  font-size: 2rem;
  background: #80acac;
  border-style: solid;
  border-color: #f9f3ea;
  border-width: 0.1rem;
  border-radius: 2px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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

  @media (max-width: 768px) {
    width: 50%;
    height: 8vmin;
    font-size: 1rem;
  }
`;
