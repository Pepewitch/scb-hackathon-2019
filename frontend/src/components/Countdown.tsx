import React, { useEffect, useState, useMemo } from "react";
import { Flex } from "./Layout";
import styled from "styled-components";
import { COLOR } from "../const";

const Digit = styled.div`
  width: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  border-radius: 0.3rem;
  text-align: center;
  color: white;
  background-color: rgb(29, 70, 255);
`;

const GroupDigits = (props: any) => {
  const { label, number } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: "1rem",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Digit style={{ marginRight: "0.2rem" }}>
          {number.toString().length < 2 ? "0" : number.toString()[0]}
        </Digit>
        <Digit>
          {number.toString().length > 1
            ? number.toString()[1]
            : number.toString()[0] || "0"}
        </Digit>
      </div>
      <span style={{ color: "white", alignSelf: "center" }}>{label}</span>
    </div>
  );
};

const getTimeDiff = (target: Date, now: Date) =>
  target.getTime() - now.getTime();

const Countdown = (props: any) => {
  const { target } = props;
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    if (target) {
      const id = setInterval(() => {
        setNow(new Date());
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }
  }, []);
  const days = useMemo(() => {
    if (target) {
      const diff = getTimeDiff(target, now);
      if (diff < 0) return 0;
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    } else {
      return 0;
    }
  }, [now]);
  const hours = useMemo(() => {
    if (target) {
      const diff = getTimeDiff(target, now);
      if (diff < 0) return 0;
      return Math.floor(diff / (1000 * 60 * 60)) % 24;
    } else {
      return 0;
    }
  }, [now]);
  const minutes = useMemo(() => {
    if (target) {
      const diff = getTimeDiff(target, now);
      if (diff < 0) return 0;
      return Math.floor(diff / (1000 * 60)) % 60;
    } else {
      return 0;
    }
  }, [now]);
  const seconds = useMemo(() => {
    if (target) {
      const diff = getTimeDiff(target, now);
      if (diff < 0) return 0;
      return Math.floor(diff / 1000) % 60;
    } else {
      return 0;
    }
  }, [now]);
  return (
    <Flex direction="row" style={{ justifyContent: "center" }} {...props}>
      <GroupDigits label="Days" number={days} />
      <GroupDigits label="Hours" number={hours} />
      <GroupDigits label="Minutes" number={minutes} />
      <GroupDigits label="Seconds" number={seconds} />
    </Flex>
  );
};

export default Countdown;
