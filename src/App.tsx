import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import backImg from "./assets/back.webp";
import { Planet } from "./components/Planet";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";
import data from "./data.json";

console.log(data[3]);
export type Props = {
  show: boolean | any;
  setShow: boolean | any;
};
function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Main style={{ background: show ? "#08082e" : "" }}>
      <Header setShow={setShow} show={show} />
      <Routes>
        <Route path="/planet/:name" element={<Planet />} />
      </Routes>
    </Main>
  );
}

const Main = styled.div`
  background-image: url(${backImg});
  background-repeat: repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default App;
