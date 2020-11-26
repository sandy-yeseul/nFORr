import React from "react";
import Button from "@material-ui/core/Button";

export default function MakeButton(props) {
  return (
    <Button variant="contained" {...props}>
      {props.text}
    </Button>
  );
}