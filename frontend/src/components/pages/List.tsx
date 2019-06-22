import React from "react";
import { Button } from "../Button";
import { buy } from "../../services";

const List = () => {
  return (
    <div>
      List
      <Button onClick={buy}>BUY</Button>
    </div>
  );
};

export default List;
