import React, { useState, useEffect } from "react";
import { callDb, setIdTitleList, filterPublished } from "../../utilities";
import { withRouter } from "react-router-dom";
import { List, Error } from "../Common";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function ListPage() {
  const [Data, setData] = useState([]);
  const [Books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [published, setPublished] = useState(true);
  useEffect(() => {
    const dbElement = {
      method: "GET",
      url: "http://localhost:3028/books",
    };
    callDb(dbElement)
      .then((res) => {
        setData(res.data);
        const books = setIdTitleList(res.data);
        setBooks(books);
      })
      .catch((err) => setError(err.toString()));
  }, []);
  const buttonHandler = () => {
    const filteredBooks = filterPublished(Data, published);
    const books = setIdTitleList(filteredBooks);
    setBooks(books);
    setPublished(!published);
  };
  const allButtonHandler = () => {
    setBooks(setIdTitleList(Data));
  };
  return (
    <div>
      {error && <Error message={error} />}
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={allButtonHandler}>전체보기</Button>
        <Button
          onClick={() => {
            setPublished(true);
            buttonHandler();
          }}
        >
          출판
        </Button>
        <Button
          onClick={() => {
            setPublished(false);
            buttonHandler();
          }}
        >
          미출판
        </Button>
      </ButtonGroup>
      {Books.length > 0 ? <List obj={Books} /> : <p>loading..</p>}
    </div>
  );
}
export default withRouter(ListPage);
