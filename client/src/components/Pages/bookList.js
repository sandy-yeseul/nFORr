import React, { useState, useEffect } from "react";
import { callDb } from "../../utilities";
import { withRouter } from "react-router-dom";
import { Error, Header, Card } from "../Common";

function ListPage() {
  const [Books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const dbElement = {
      method: "GET",
      url: "http://localhost:3028/books",
    };
    callDb(dbElement)
      .then((res) => {
        setBooks(res.data);
        setBookList(res.data);
      })
      .catch((err) => setError(err.toString()));
  }, []);
  const searchHandler = () => {
    const searchedList = searchBook(search, Books);
    if (!searchedList) {
      setError("Doesn't have that book");
      setBookList(Books);
      return;
    }
    setBookList(searchedList);
    setError("");
  };
  const publishFilterHandler = (published) => {
    const filtered = filterPublish(published, Books);
    setBookList(filtered);
  };
  return (
    <>
      <div className="BodyStructure">
        {error && <Error message={error} />}
          {bookList.length > 0 ? (
            bookList.map((book, i) => {
              return <Card book={book} key={`${i}${book.title}`} />;
            })
          ) : (
            <p>loading..</p>
          )}
      </div>
      <Header
        setSearch={setSearch}
        searchHandler={searchHandler}
        publishFilterHandler={publishFilterHandler}
      />
    </>
  );
}
export default withRouter(ListPage);
function searchBook(searchQuery, bookList) {
  const books = [...bookList];
  if (searchQuery === "") {
    console.log(searchQuery);
    return books;
  }
  const filtered = books.filter(
    (book) =>
      book.title.includes(searchQuery) ||
      book.author.includes(searchQuery) ||
      book.publisher.includes(searchQuery)
  );
  console.log(filtered);
  if (filtered.length < 1) return false;
  return filtered;
}
function filterPublish(published, bookList) {
  const books = [...bookList];
  if (published) {
    return books.filter((book) => book.publisher.length > 0);
  } else {
    return books.filter((book) => book.publisher.length < 1);
  }
}
