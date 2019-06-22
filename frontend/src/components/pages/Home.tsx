import React, { useEffect, useState } from "react";
import * as fiery from "fiery";
import { Spin, Input } from "antd";
import { Button } from "../Button";
import { addPool, deletePool, randomPoolRef } from "../../firebase";
import axios from "axios";
import { login, getToken } from "../../services";
import * as queryString from "query-string";
import styled from "styled-components";
import { Card } from "../Layout";

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #111;
  height: 100%;
  padding: 24px;
  align-items: center;
`;

const Title = styled.h1`
  color: #eee;
`;

const Home = ({ location, history }) => {
  const [onFetch, setOnFetch] = useState(false);
  useEffect(() => {
    const { search } = location;
    const { code } = queryString.parse(search);
    if (code) {
      setOnFetch(true);
      try {
        localStorage.setItem("code", code.toString());
        if (typeof code === "string") {
          getToken(code);
        }
      } catch (e) {
      } finally {
        setOnFetch(false);
      }
    }
  }, [location]);
  return (
    <Container>
      <Title>Lucket</Title>
      <div
        style={{
          width: 80,
          height: 80,
          background: "#eee",
          marginBottom: "2em"
        }}
      >
        img
      </div>
      <Card style={{ padding: 16, marginBottom: "2em" }}>
        <Input />
        <Input />
        <Input />
        <Input />
      </Card>
      {/* <Button disabled={onFetch} onClick={login}>
        SIGN UP
      </Button> */}
      <Button disabled={onFetch} onClick={login}>
        SIGN UP WITH SCB
      </Button>
    </Container>
  );
};

export default Home;
