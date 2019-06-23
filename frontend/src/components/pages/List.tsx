import React, { useState } from "react";
import { Container, Header, Flex } from "../Layout";
import SwipeCard from "../SwipeCard";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../const";
import left from "../../assets/arrow_left.svg";
import right from "../../assets/arrow_right.svg";
import iphone from "../../assets/items/1.png";
import wire from "../../assets/items/2.png";
import notebook from "../../assets/items/3.png";
import ps from "../../assets/items/4.png";
import watch from "../../assets/items/5.png";

const CardContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ArrowLeft = styled.span`
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%) scale(4);
`;

const ArrowRight = styled.span`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) scale(4);
`;

export const mock = [
  {
    poolId: 1,
    img: iphone,
    price: 100,
    tickets: 300,
    name: "iPhone X",
    content: (
      <Flex direction="column">
        <span>iPhone X</span>
      </Flex>
    )
  },
  {
    poolId: 2,
    img: wire,
    price: 80,
    tickets: 30,
    name: "สายชาร์จ iPhone",
    content: (
      <Flex direction="column">
        <span>สายชาร์จ iPhone</span>
      </Flex>
    )
  },
  {
    poolId: 3,
    img: notebook,
    price: 200,
    tickets: 400,
    name: "Macbook Pro",
    content: (
      <Flex direction="column">
        <span>Macbook Pro</span>
      </Flex>
    )
  },
  {
    poolId: 4,
    img: ps,
    price: 100,
    tickets: 200,
    name: "Playstation 4",
    content: (
      <Flex direction="column">
        <span>Playstation 4</span>
      </Flex>
    )
  },
  {
    poolId: 5,
    img: watch,
    price: 100,
    tickets: 500,
    name: "Luxury watch",
    content: (
      <Flex direction="column">
        <span>Luxury watch</span>
      </Flex>
    )
  }
];

const List = () => {
  const [index, setIndex] = useState(0);
  const item = mock[index];
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Header />
      <span
        style={{
          color: "white",
          alignSelf: "flex-start",
          marginBottom: "1rem"
        }}
      >
        JOIN BOARD
      </span>
      <CardContainer>
        <SwipeCard img={item.img} content={item.content} />
        <ArrowLeft
          onClick={() => setIndex(index - 1 > 0 ? index - 1 : mock.length - 1)}
        >
          <img src={left} />
        </ArrowLeft>
        <ArrowRight onClick={() => setIndex((index + 1) % mock.length)}>
          <img src={right} />
        </ArrowRight>
      </CardContainer>
      <Link to={`/ticket/${item.poolId}`} style={{ width: "100%" }}>
        <Button color="primary" style={{ marginTop: "2rem" }}>
          BUY TICKET
        </Button>
      </Link>
    </Container>
  );
};

export default List;
