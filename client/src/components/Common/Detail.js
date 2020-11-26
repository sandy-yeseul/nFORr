import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Detail({ book }) {
  return (
    <>
      <img alt="Book Cover" src={`http://localhost:3028/${book.image}`} />
      <h2>{book.title}</h2>
      <span>{book.author}</span>
      <p>{`$${book.price}`}</p>
      <p>{book.publisher}</p>
    </>
  );
}
