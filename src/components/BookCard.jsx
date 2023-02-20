import React from "react";
import { NavLink } from "react-router-dom";

export default function BookCard(props) {
  const bookSlug = props.card.slug;
  console.log(bookSlug);
  const bookImg = `bookImg${props.card.id}`;

  return (
    <div className="book-container">
      <NavLink className="info-link" to={bookSlug}>
        <div className="book-card">
          <h2>{props.card.title}</h2>
          {/* <div className="book-card--image-container"> */}
          <img
            alt="picture of text book"
            src={`../src/assets/${props.card.img}`}
            className="book-card--image"
          />
          {/* </div> */}

          <p>{props.card.author}</p>
        </div>
        <button className="more-info-btn">More Info</button>
      </NavLink>
    </div>
  );
}
