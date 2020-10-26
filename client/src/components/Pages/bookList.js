import React, { useState, useEffect } from "react";
import { callDb, setIdTitleList, filterPublished } from "../../utilities";
import { withRouter } from "react-router-dom";
import { List, Button, Error } from "../Common";
import { ButtonGroup } from '@material-ui/core';

function ListPage() {
  const [Data, setData] = useState([]);
  const [Books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [published, setPublished] = useState(true);
  const [buttonText, setButtonText] = useState("출판");
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
    if (published) setButtonText("미출판");
    else setButtonText("출판");
    const filteredBooks = filterPublished(Data, published);
    const books = setIdTitleList(filteredBooks);
    setBooks(books);
    setPublished(!published);
  };
  const allButtonHandler = () =>{
      setBooks(setIdTitleList(Data));
  }
  return (
    <div>
      {error && <Error message={error} />}
      {Books.length > 0 ? <List obj={Books} /> : <p>loading..</p>}
      <ButtonGroup variant="outlined" >
        <Button value={buttonText} handler={buttonHandler} color='primary'/>
        <Button value={'all'} handler={allButtonHandler} color='secondary' />
      </ButtonGroup>
    </div>
  );
}
export default withRouter(ListPage);