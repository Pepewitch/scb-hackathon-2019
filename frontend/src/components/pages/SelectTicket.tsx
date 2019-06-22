import React, { useState } from "react";
import { Container, Header, Flex } from "../Layout";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import demo from "../../assets/demo.png";
import { Tag as AntTag } from "antd";
import { COLOR } from "../../const";
import styled from "styled-components";
import Countdown from "../Countdown";
import * as queryString from "query-string";

const Tag = styled(AntTag)`
  font-size: 1.2rem !important;
  font-weight: 600;
  padding: 0.5rem 1rem !important;
`;

const Text = styled.span`
  color: white;
  font-size: 1.2rem;
  margin-right: 2rem;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
  grid-gap: 0.5rem;
`;

const TicketContainer = styled.button`
  border: none;
  outline: none;
  width: 2rem;
  color: white;
  height: 2rem;
  border-radius: 0.3rem;
  font-weight: 600;
`;

const Ticket = (props: any) => {
  const { number, selected, disabled } = props;
  const backgroundColor = disabled
    ? COLOR.GRAY
    : selected
    ? COLOR.SECONDARY
    : COLOR.PRIMARY;
  return (
    <TicketContainer style={{ backgroundColor }} {...props}>
      {number}
    </TicketContainer>
  );
};

interface Ticket {
  number: any;
  selected: boolean;
  disabled: boolean;
}

const TicketList = (props: { tickets: Ticket[]; onClick?: any }) => {
  const { onClick, tickets } = props;
  return (
    <Grid>
      {tickets
        ? tickets.map((ticket, index) => (
            <Ticket
              number={ticket.number}
              selected={ticket.selected}
              disabled={ticket.disabled}
              key={index}
              onClick={() => onClick(ticket)}
            />
          ))
        : null}
    </Grid>
  );
};

const SelectTicket = (props: any) => {
  const {
    history,
    match: {
      params: { poolId }
    }
  } = props;
  const [tickets, setTickets] = useState<Ticket[]>([
    { number: 1, selected: false, disabled: false },
    { number: 2, selected: false, disabled: false },
    { number: 3, selected: false, disabled: false },
    { number: 4, selected: false, disabled: false },
    { number: 5, selected: false, disabled: false },
    { number: 6, selected: false, disabled: false },
    { number: 7, selected: false, disabled: true }
  ]);
  const toCart = () => {
    history.push({
      pathname: `/cart`,
      search: queryString.stringify({
        [poolId]: JSON.stringify(
          tickets.filter(e => e.selected).map(e => e.number)
        )
      })
    });
  };
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Header />
      <img
        src={demo}
        style={{ width: "100%", height: "auto", marginBottom: "2rem" }}
      />
      <Flex direction="row">
        <h2 style={{ color: "white" }}>Item1</h2>
      </Flex>
      <Flex direction="row">
        <Text>Ticket Price</Text>
        <Tag color={COLOR.PRIMARY}>100 Baht</Tag>
      </Flex>
      <Flex direction="row">
        <Text>Live Draw in</Text>
      </Flex>
      <Countdown target={new Date(Date.now() + 10000000)} />
      <Flex direction="row">
        <h2 style={{ color: "white" }}>Please select your ticket</h2>
      </Flex>
      <TicketList
        tickets={tickets}
        onClick={(ticket: Ticket) => {
          console.log(ticket);
          const selectedTicket = tickets.find(e => e === ticket);
          if (selectedTicket) {
            selectedTicket.selected = !!!selectedTicket.selected;
            setTickets([...tickets]);
          }
        }}
      />
      <Button
        style={{ marginTop: "2rem" }}
        disabled={tickets.filter(e => e.selected).length === 0}
        onClick={toCart}
      >
        GO TO CART
      </Button>
    </Container>
  );
};

export default SelectTicket;
