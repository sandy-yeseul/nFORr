import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "12vw",
    display: "flex",
  },
  cover: {
    width: 100,
    float: "left",
    position: 'relative'
  },
  content:{
    position: "relative",
    float: "right"
  }
}));

export default function BookCard({ book }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea className={classes.details} href={`/books/${book._id}`}>
          <img
            alt="Book Cover"
            src={`http://localhost:3028/${book.image}`}
            className={classes.cover}
          />
          <CardContent className={classes.content}>
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
            <span>{book.price}</span>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
