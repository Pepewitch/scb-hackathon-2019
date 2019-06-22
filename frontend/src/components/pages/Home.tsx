import React from "react";
import * as fiery from "fiery";
import { stocksRef, addStock, deleteStock } from "../../firebase";
import { Flex, Container } from "../Layout";
import { Spin } from "antd";
import { Button } from "../Button";

const Home = () => {
  const stockState = fiery.useFirebaseDatabase(stocksRef);
  const add = () => {
    addStock({
      createdAt: new Date(),
      item: [],
      loseCount: Math.random(),
      name: "hello"
    });
  };
  const remove = () => {
    if (stockState.data) {
      const keys = Object.keys(stockState.data);
      deleteStock(keys[keys.length - 1]);
    }
  };
  return (
    <Container>
      <Button type="primary" onClick={add}>add</Button>
      <Button type="primary" onClick={remove}>remove</Button>
      {stockState.loading ? <Spin /> : JSON.stringify(stockState.data)}
    </Container>
  );
};

export default Home;
