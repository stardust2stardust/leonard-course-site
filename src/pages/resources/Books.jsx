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
    <div className="page-content">
      <h1 className="page-title">Organic Chemistry Books</h1>
      <section className="inner-content book-list-container">
        {cardElements}
      </section>
    </div>
  );
}
