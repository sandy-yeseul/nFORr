import axios from "axios";

export {
  callDb,
  buildMovePage,
  setIdTitleList,
  filterPublished,
};

async function callDb({ method, url, body = null } = {}) {
  try {
    const result = await axios({
      method: method,
      url: url,
      data: body,
    });
    return result;
  } catch (err) {
    throw new Error(err.response.data);
  }
}
function buildMovePage(props) {
  return (url) => {
    alert("SUCCESS");
    props.history.push(url);
  };
}
function setIdTitleList(books) {
  const bookList = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i]._id.length > 0) {
      bookList.push({ id: books[i]._id, title: books[i].title });
    }
  }
  return bookList;
}
function filterPublished(books, published) {
  const publishedBooks = [];
  const unPublishedBooks = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].publisher) {
      publishedBooks.push(books[i]);
    } else {
      unPublishedBooks.push(books[i]);
    }
  }
  if (published) return publishedBooks;
  else return unPublishedBooks;
}
