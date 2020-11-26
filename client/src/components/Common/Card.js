import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    display: "flex",
    margin: '1vw',
    float: "left"
  },
  cover: {
    width: 80,
    float: "left",
    position: "relative",
    padding: '0.5vw'
  },
  content: {
    position: "relative",
    float: "right",
  },
}));

export default function BookCard({ book }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea className={classes.details} href={`/books/${book._id}`}>
          <Grid container>
            <Grid item sm={5}>
              <img
                alt="Book Cover"
                src={`http://localhost:3028/${book.image}`}
                className={classes.cover}
              />
            </Grid>
            <Grid item sm={7}>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
}
