import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function EventCard({ img, text, time, title }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>{time}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
