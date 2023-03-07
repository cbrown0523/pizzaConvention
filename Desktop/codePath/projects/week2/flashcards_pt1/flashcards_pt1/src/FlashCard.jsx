import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const FlashCard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div>
      <Card className="text-center" style={{ width: "600px" }}>
        <Card.Body>
          <Card.Text onClick={() => setFlip(!flip)}>
            {flip ? (
              flashcard.back
            ) : (
              <>
                <h3 className="title">{flashcard.front.title}</h3>
                <img className="img" src={flashcard.front.img}></img>
              </>
            )}
          </Card.Text>

          <div className="bttn">
            <button
              className="btn btn-l"
              type="button"
              //   onClick={props.handleClick_left}
              //   title={props.text}
            >
              <a>
                <img style={{ height: "30px" }} src="../public/larrow.png" />
              </a>
            </button>
            <button
              className="btn"
              type="button"
              // onClick={handleClick_right}
            >
              <a>
                <img style={{ height: "30px" }} src="../public/rarrow.png" />
              </a>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
export default FlashCard;
