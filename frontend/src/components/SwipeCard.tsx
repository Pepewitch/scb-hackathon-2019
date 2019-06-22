import React from "react";
import { Card } from "./Layout";
import demo from "../assets/demo.png";
import styled from "styled-components";
import { COLOR } from "../const";

const CardImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  background-color: #eee;
  border-bottom: 2px solid #eee;
`;

const CardImage = styled.img`
  max-width: 100%;
  width: auto;
  height: auto;
  max-height: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 24px;
`;

const SwipeCard = () => {
  return (
    <Card>
      <CardImageContainer>
        <CardImage src={demo} />
      </CardImageContainer>
      <CardContent>Hello</CardContent>
    </Card>
  );
};

export default SwipeCard;
