import styled from "styled-components";
import { Button as AntButton } from "antd";
import { COLOR } from "../const";

export const Button = styled(AntButton)`
  border-radius: 9999px !important;
  padding: 0.5em !important;
  height: auto !important;
  width: 100%;
  color: ${props =>
    props.disabled
      ? "#eee"
      : props.color === "primary"
      ? "white"
      : COLOR.PRIMARY}!important;
  background-color: ${props =>
    props.disabled
      ? COLOR.GRAY
      : props.color === "primary"
      ? COLOR.PRIMARY
      : "white"}!important;
  border: none !important;
`;
