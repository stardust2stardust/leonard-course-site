import React from "react";
import { NavLink } from "react-router-dom";

export default function BookCard(props) {
  const bookSlug = props.card.slug;

  return (
      <NavLink className="info-link book-card" to={bookSlug}>
          <h2>{props.card.title}</h2>
          <img
            alt="picture of text book"
            src={`../src/assets/${props.card.img}`}
            className="book-card--image"
          />
          <h3>{props.card.author}</h3>
      </NavLink>

  );
}
