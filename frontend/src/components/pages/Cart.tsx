import React, { useMemo } from "react";
import { Container, Header, Flex } from "../Layout";
import { Button } from "../Button";
import styled from "styled-components";
import * as queryString from "query-string";
import { COLOR } from "../../const";
import demo from "../../assets/demo.png";
import { buy } from "../../services";
import { mock } from "./List";

const Title = styled.span`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const parseObject = (obj: { [key: string]: string }) => {
  return {
    ...obj,
    ...(obj["tickets"] ? { tickets: JSON.parse(obj["tickets"]) } : {})
  } as any;
};

const TicketDetail = styled.div`
  border: 1px solid ${COLOR.GRAY};
  display: flex;
  flex-flow: row nowrap;
  color: white;
`;

const DetailImageContainer = styled.div`
  width: 3rem;
  flex-basis: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0.5rem;
  flex-shrink: 0;
`;

const DetailImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

const TicketList = (props: {
  name: string;
  price: number;
  list: number[];
  poolId: any;
}) => {
  const { name, price, list, poolId } = props;
  const item = mock.find(e => e.poolId.toString() === poolId.toString());
  return (
    <div style={{ width: "100%" }}>
      {list.map((n, i) => (
        <TicketDetail key={i}>
          <DetailImageContainer>
            <DetailImage src={(item && item.img) || ""} />
          </DetailImageContainer>
          <Flex direction="column" style={{ justifyContent: "space-evenly" }}>
            <Flex direction="row" style={{ justifyContent: "space-between" }}>
              <span># {n}</span>
              <span style={{ color: "green", marginRight: "1rem" }}>
                {price} Baht
              </span>
            </Flex>
            <Flex direction="row">
              <span>{name}</span>
            </Flex>
          </Flex>
        </TicketDetail>
      ))}
    </div>
  );
};

const Cart = (props: any) => {
  const { location } = props;
  const selected = useMemo(
    () => parseObject(queryString.parse(location.search) as any),
    [location]
  );
  const total = selected.tickets.length * Number(selected.price);
  const checkout = () => {
    buy(total);
  };
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Header />
      <Title>Cart Details</Title>
      <TicketList
        name={selected.name}
        price={selected.price}
        list={selected.tickets}
        poolId={selected.poolId}
      />
      <Flex
        direction="row"
        style={{
          justifyContent: "flex-end",
          margin: "1rem 0",
          fontSize: "1.2rem",
          fontWeight: 600,
          color: "white"
        }}
      >
        TOTAL: {total} Baht
      </Flex>
      <Button color="primary" style={{ marginTop: "2rem" }} onClick={checkout}>
        Checkout
      </Button>
    </Container>
  );
};

export default Cart;
