import React from "react";
import { Container, Header } from "../Layout";
import SwipeCard from "../SwipeCard";
import { Button } from "../Button";
import { Link } from "react-router-dom";

const List = () => {
  const poolId = "test";
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Header />
      <SwipeCard />
      <Link to={`/ticket/${poolId}`} style={{ width: "100%" }}>
        <Button color="primary" style={{ marginTop: "2rem" }}>
          BUY TICKET
        </Button>
      </Link>
    </Container>
  );
};

export default List;
