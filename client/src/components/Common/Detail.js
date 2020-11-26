import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Detail({ book }) {
  const classes = useStyles();
  return (
    <>{book.image ? (
      <img
        alt="Book Cover"
        src={`http://localhost:3028/${book.image}`}
        className={classes.image}
      />
    ) : (
      <Skeleton
        variant="rect"
        animation="false"
        className={classes.image}
      />
    )}
      <h2>{book.title}</h2>
      <span>{book.author}</span>
      <p>{`$${book.price}`}</p>
      <p>{book.publisher}</p>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  image:{
    width: "300px",
    height: "300px",
    backgroundColor: "#E3E3E3",
  }
}));