import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Detail({ book }) {
  return (
    <>
      <h2>{book.title}</h2>
      <span>{book.author}</span>
      <p>{book.price}</p>
      <p>{book.publisher}</p>
      {/* {data && Object.keys(data).map(item =>{
            if(item === "_id") return null
            return <p key={item.toString()}>{item}: {data[item]}</p>
        })} */}
    </>
  );
}
