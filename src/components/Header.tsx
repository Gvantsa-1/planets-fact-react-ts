import React, { useState } from "react";
import styled from "styled-components";
import burgerImg from "../assets/icon-hamburger.svg";
import data from "../data.json";
import { Link } from "react-router-dom";
import icon from "../assets/icon-chevron.svg";
import greyIcon from "../assets/greymenu.svg";

export type Props = {
  show?: boolean | any;
  setShow?: boolean | any;
};

export const Header = (props: any) => {
  const { show, setShow } = props;
  const showMenu = () => {
    setShow(!show);
  };

  return (
    <Container>
      <Wrapper>
        <h1>The planets</h1>
        <BurgerBox
          show={show}
          onClick={() => {
            showMenu();
          }}
        />
      </Wrapper>
      {show ? (
        <BurgerMenu>
          {data.map((item) => {
            return (
              <div>
                <LinkContainer to={`/planet/${item.name}`} color={item.color}>
                  <Color
                    style={{
                      backgroundColor: item.color,
                    }}
                  ></Color>
                  <h4>{item.name}</h4>
                  <Icon src={icon}></Icon>
                </LinkContainer>
              </div>
            );
          })}
        </BurgerMenu>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    top: 64px;
    min-width: 200px;
    border: 1px white solid;
    width: 100%;
    opacity: 0.2;
    margin-bottom: 100px;
    @media only screen and (min-width: 780px) {
      display: none;
    }
  }
  h1 {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 400;
    font-family: "Antonio", sans-serif;
    font-size: 28px;
    @media only screen and (min-width: 780px) {
      margin: 0 auto;
      margin-top: 16px;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  align-items: baseline;
`;
const BurgerBox = styled.div<Props>`
  background-image: url(${(props) => (props.show ? burgerImg : burgerImg)});
  background-repeat: no-repeat;
  cursor: pointer;
  width: 24px;
  height: 17px;
  z-index: 2;
  @media only screen and (min-width: 780px) {
    display: none;
  }
`;
const BurgerMenu = styled.div`
  width: 100vw;
  height: 150vh;
  margin-top: 20px;
`;
const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 80px;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 20px;
  gap: 25px;
  text-decoration: none;
  h4 {
    font-family: "League Spartan", sans-serif;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 25px;

    letter-spacing: 1.36px;
    color: #ffffff;
    font-weight: 700;
    width: 90vw;
  }
`;
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const Icon = styled.img`
  width: 14px;
  height: 18px;
`;
