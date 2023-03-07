import React from "react";
import FlashCard from "./FlashCard";

const FlashCardList = ({ flashcards }) => {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <FlashCard flashcard={flashcard} />;
      })}
    </div>
  );
};
export default FlashCardList;
