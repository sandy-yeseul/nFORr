import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { newForm, updateForm } from "../../axioses";
import axios from "axios";

function Form(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [seller, setSeller] = useState("");
  const [price, setPrice] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [Button, setButton] = useState("");

  const id = useParams().bookId;
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3028/books/${id}`)
        .then((res) => res.data)
        .then((data) => {
          setTitle(data.title);
          setAuthor(data.author);
          setPublisher(data.publisher);
          setSeller(data.seller);
          setPrice(data.price);
          setPublishDate(data.publishDate);
        });
    }
    if (props.axios == "new") {
      setButton("추가하기");
    } else if (props.axios == "update") {
      setButton("변경하기");
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      author: author,
      publisher: publisher,
      seller: seller,
      price: price,
      publishDate: publishDate,
    };
    if (props.axios == "new") {
      newForm(body);
    } else if (props.axios == "update") {
      updateForm(body, id);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label>제목</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="제목"
      />
      <label>작가</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        placeholder="작가"
      />
      <label>출판사</label>
      <input
        type="text"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        placeholder="출판사"
      />
      <label>판매처</label>
      <input
        type="text"
        value={seller}
        onChange={(e) => setSeller(e.target.value)}
        placeholder="판매처"
      />
      <label>판매가</label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="판매가"
      />
      <label>출판일</label>
      <input
        type="text"
        value={publishDate}
        onChange={(e) => setPublishDate(e.target.value)}
        placeholder="출판일"
      />
      <input type="submit" value={Button} />
    </form>
  );
}

export default Form;
