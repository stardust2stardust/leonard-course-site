import React from "react";
import { NavLink } from "react-router-dom";

export default function BookCard(props) {
  const bookSlug = props.card.slug;

  return (
      <NavLink className="info-link book-card" to={bookSlug}>
          <div className="book-card--title">
          <h2>{props.card.title}</h2>
          <h3>{props.card.subtitle}</h3>
          </div>
          <img
            alt="picture of text book"
            src={`${props.card.img}`}
            className="book-card--image"
          />
          <h3>{props.card.author}</h3>
      </NavLink>

  );
}
