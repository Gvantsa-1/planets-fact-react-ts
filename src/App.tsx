import { Route, Routes } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import backImg from "./assets/back.webp";
import { BurgerMenu } from "./components/BurgerMenu";
import { Planet } from "./components/Planet";
import { HomePage } from "./components/HomePage";
import data from "./data.json";
console.log(data);
interface planetsInfo {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    images: {};
  }[];
}
function App() {
  return (
    <Container>
      <Header>
        <h1>The planets</h1>
        <BurgerMenu />
      </Header>
      <Routes>
        <Route path="/" element={<HomePage planetsInfo={data} />} />
        <Route path="/:planet" element={<Planet planetsInfo={data} />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${backImg});
  background-repeat: repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  h1 {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
    font-family: "Antonio", sans-serif;

    font-size: 28px;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
`;

export default App;
