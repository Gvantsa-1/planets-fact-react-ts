import React from "react";
import styled from "styled-components";
import burgerImg from "../assets/icon-hamburger.svg";
export const BurgerMenu = () => {
  return (
    <MenuContainer>
      <BurgerBox></BurgerBox>
    </MenuContainer>
  );
};
const MenuContainer = styled.div``;
const BurgerBox = styled.div`
  background-image: url(${burgerImg});
  background-repeat: no-repeat;
  width: 24px;
  height: 17px;
  cursor: pointer;
`;
