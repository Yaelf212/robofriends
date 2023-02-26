import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => (
  <div>
    {robots.map((robot, i) => (
      <Card
        name={robot.name}
        email={robot.email}
        id={robot.id}
        key={robot.id}
      />
    ))}
  </div>
);
export default CardList;
