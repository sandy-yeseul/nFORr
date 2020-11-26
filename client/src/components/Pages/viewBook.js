import React, { useState, useEffect } from "react";
import { callDb } from "../../utilities";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Delete, Detail, Error, Header, Button } from "../Common";

function ViewBookPage(props) {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const id = useParams().bookId;

  useEffect(() => {
    const dbElement = {
      method: "GET",
      url: `http://localhost:3028/books/${id}`,
    };
    callDb(dbElement)
      .then((res) => setBook(res.data))
      .catch((err) => setError(err.toString()));
  }, [id]);
  return (
    <>
      <div className="BodyStructure">
        {book != null ? (
          <>
            <Detail book={book} />
            <Button text="Update" href={`/books/update/${id}`} />
            <Delete id={id} />
          </>
        ) : (
          <p>loading...</p>
        )}
        {error && <Error message={error} />}
      </div>
      <Header className="HeaderStructure" />
    </>
    // <div>
    // {data? <Detail data={data} /> : <p>loading...</p>}
    // <a href={`/books/update/${id}`}>Update</a>
    // <Delete id={id} movePage={buildMovePage(props)}/>
    // {error && <Error message={error} />}
    // </div>
  );
}
export default withRouter(ViewBookPage);
