import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { callDb, setIdTitleList, filterPublished } from "../../utilities";
import { List, Error, Button } from "../Common";

function SearchPage() {
  const [Author, setAuthor] = useState("");
  const [Books, setBooks] = useState([]);
  const [Data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [state, setState] = useState("");
  const [published, setPublished] = useState(true);
  const [buttonText, setButtonText] = useState("출판");
  const SubmitHandler = (e) => {
    setState("loading..");
    e.preventDefault();
    const dbElement = {
      method: "GET",
      url: `http://localhost:3028/books?author=${Author}`,
    };
    callDb(dbElement)
      .then((res) => {
        if (res.data.length > 0) {
          setState("");
          setData(res.data)
          const books = setIdTitleList(res.data);
          setBooks(books);
        } else {
          setState("doesn't exist ");
        }
      })
      .catch((err) => setError(err.toString()));
  };
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
    <>
      <form onSubmit={SubmitHandler}>
        <input
          value={Author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="검색"
        />
        <Button type={"submit"} value={"검색하기"} />
      </form>
      {error && <Error message={error} />}
      {state && <p>{state}</p>}
      {Books.length > 0 ? <List obj={Books} /> : null}
      <Button value={buttonText} handler={buttonHandler} />
      <Button value={'all'} handler={allButtonHandler} />
    </>
  );
}
export default withRouter(SearchPage);
