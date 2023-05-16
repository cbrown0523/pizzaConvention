import React from "react";
import Button from "react-bootstrap/Button";
import { Card as ReactCard } from "react-bootstrap";
function ConventionCard({ time, place, img, text }) {
  return (
    <ReactCard style={{ width: "18rem" }}>
      <ReactCard.Img variant="top" src={img} />
      <ReactCard.Body>
        <ReactCard.Title>Lorem Ipsum</ReactCard.Title>
        <ReactCard.Text>{text}</ReactCard.Text>
        <ReactCard.Text>{place}</ReactCard.Text>
        <ReactCard.Text>{time}</ReactCard.Text>
        <Button variant="primary">Go somewhere</Button>
      </ReactCard.Body>
    </ReactCard>
  );
}

export default ConventionCard;
