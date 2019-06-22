import React from "react";
import styled from "styled-components";
import { COLOR } from "../const";
import logo from "../assets/logo.png";

export const Flex = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${COLOR.BACKGROUND};
  height: 100%;
  padding: 6rem 1.5rem;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  height: 4rem;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${COLOR.HEADER};
`;

const Logo = styled.img`
  width: 40px;
  height: auto;
  margin-right: 16px;
`;

const Title = styled.span`
  color: white;
  font-size: 1.4em;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="" />
      <Title>Lucket</Title>
    </HeaderContainer>
  );
};

export const Card = styled.div`
  overflow: hidden;
  background-color: white;
  border-radius: 1rem;
  width: 100%;
`;
