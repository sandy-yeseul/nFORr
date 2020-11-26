import React, { useState, useEffect } from "react";
import { callDb } from "../../utilities";
import { withRouter } from "react-router-dom";
import { Error, Header, Card } from "../Common";

function ListPage() {
  const [Books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const dbElement = {
      method: "GET",
      url: "http://localhost:3028/books",
    };
    callDb(dbElement)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => setError(err.toString()));
  }, []);
  // const buttonHandler = () => {
  //   const filteredBooks = filterPublished(Data, published);
  //   const books = setIdTitleList(filteredBooks);
  //   setBooks(books);
  //   setPublished(!published);
  // };
  // const allButtonHandler = () => {
  //   setBooks(setIdTitleList(Data));
  // };
  return (
    <>
      {error && <Error message={error} />}
      {/* <ButtonGroup color="primary" aria-label="outlined primary button group">
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
      </ButtonGroup> */}
      <div className="BodyStructure">
        {Books.length>0 ?  Books.map(book =>{
          return <Card book={book} />
        }): <p>loading..</p>}
      </div>
      <Header className="HeaderStructure" />
    </>
  );
}
export default withRouter(ListPage);
