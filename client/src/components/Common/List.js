import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function MakeList(props) {
  const obj = props.obj;
  try {
    if (!obj[0].title && !obj[0].id) {
      throw new Error("no props yet");
    }
  } catch (err) {
    return (
      <p>
        There's error
        <Link to={`/home`}></Link>
      </p>
    );
  }
  return (
    <>
      <List component="nav">
        {obj &&
          obj.map((item) => {
            return (
              <ListItem button component="a" href={`/books/${item.id}`}>
                <ListItemText primary={item.title} />
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
export default MakeList;
