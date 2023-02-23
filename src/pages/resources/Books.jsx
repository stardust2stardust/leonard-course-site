import React from "react";
import BookCard from "../../components/BookCard";
import bookData from "../../bookData";

// import bookImg2 from "../assets/book2-imageOnly.jpg";
// import bookImg3 from "../assets/book3-imageOnly.jpg";

export default function Books() {
  console.log(bookData);
  const cardElements = bookData.map((card) => {
    return <BookCard key={card.id} card={card} imgSrc={`bookImg${card.id}`} />;
  });

  return (
   
      <section className=" book-list-container">
        {cardElements}
      </section>
  
  );
}
