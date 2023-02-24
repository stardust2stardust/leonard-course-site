import React from "react";
import BookCard from "../../components/BookCard";
import bookData from "../../bookData";

export default function Books() {
  const cardElements = bookData.map((card) => {
    return <BookCard key={card.id} card={card}  />;
  });

  return (
      <section className=" book-list-container">
        {cardElements}
      </section>
  
  );
}
