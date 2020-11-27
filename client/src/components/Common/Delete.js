import React, { useState } from "react";
import { callDb } from "../../utilities";
import { Button, Error } from "./index";

export default function Delete({ id }) {
  const [error, setError] = useState("");
  const deleteHandler = () => {
    const dbElement = {
      method: "DELETE",
      url: `http://localhost:3028/books/${id}`,
    };
    callDb(dbElement)
      .then(() => {
        window.location.assign("/books");
      })
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <>
      <Button onClick={deleteHandler}>삭제하기</Button>
      {error && <Error message={error} />}
    </>
  );
}
