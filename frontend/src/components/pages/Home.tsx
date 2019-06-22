import React, { useEffect, useState } from "react";
import { Spin, message } from "antd";
import { Button } from "../Button";
import { login, getToken } from "../../services";
import * as queryString from "query-string";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import password from "../../assets/password.png";
import styled from "styled-components";
import { Card, Container } from "../Layout";
import { COLOR } from "../../const";

const Title = styled.h1`
  color: #eee;
`;

const Input = styled.input`
  line-height: 2rem;
  border-bottom: 1px solid #eee;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  outline: none;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: auto;
`;

const Home = (props: any) => {
  const { history, location } = props;
  const [onFetch, setOnFetch] = useState(false);
  useEffect(() => {
    const { search } = location;
    const { code } = queryString.parse(search);
    if (code) {
      setOnFetch(true);
      try {
        localStorage.setItem("code", code.toString());
        if (typeof code === "string") {
          getToken(code).then(accessToken => {
            localStorage.setItem("accessToken", accessToken);
            message.success("Login with SCB!");
            history.push("/list");
          });
        }
      } catch (e) {
      } finally {
        setOnFetch(false);
      }
    }
  }, [location]);
  const loginWithScb = async () => {
    setOnFetch(true);
    await login();
    setOnFetch(false);
  };
  const content = (
    <Container style={{ minHeight: "100vh" }}>
      <Title>Lucket</Title>
      <img
        src={logo}
        style={{ width: 80, height: "auto", marginBottom: "2em" }}
      />

      <Card style={{ padding: 16, marginBottom: "2em" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5rem auto",
            gridRowGap: "0.5rem",
            gridColumnGap: "1rem",
            alignItems: "center"
          }}
        >
          <Icon src={profile} />
          <Input placeholder="Full name" />
          <Icon src={password} />
          <Input placeholder="Password" type="password" />
          <Icon src={password} />
          <Input placeholder="Confirm Password" type="password" />
        </div>
      </Card>

      <Button
        disabled={onFetch}
        onClick={login}
        color="primary"
        style={{ marginBottom: "1.6rem" }}
      >
        SIGN UP
      </Button>
      <Button disabled={onFetch} onClick={loginWithScb}>
        SIGN UP WITH SCB
      </Button>
    </Container>
  );
  return onFetch ? <Spin>{content}</Spin> : content;
};

export default Home;
