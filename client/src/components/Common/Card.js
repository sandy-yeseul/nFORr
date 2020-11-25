import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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

export default function BookCard({ imgSource }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea className={classes.details}>
          <img
            alt="Book Cover"
            src={`http://localhost:3028/${imgSource}`}
            className={classes.cover}
          />
          <CardContent className={classes.content}>
            <h4>Title</h4>
            <h5>Author</h5>
            <span>Price</span>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
