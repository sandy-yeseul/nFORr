import React, { useState, useEffect } from "react";
import { callDb } from "../../utilities";
import { Error, Button } from "../Common";

function Form(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [seller, setSeller] = useState("");
  const [price, setPrice] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [file, setFile] = useState();
  const [error, setError] = useState(null);
  const id = props.id;

  useEffect(() => {
    if (id) {
      const dbElement = {
        method: "GET",
        url: `http://localhost:3028/books/${id}`,
      };
      callDb(dbElement)
        .then((res) => res.data)
        .then((data) => {
          setTitle(data.title);
          setAuthor(data.author);
          setPublisher(data.publisher);
          setSeller(data.seller);
          setPrice(data.price);
          setPublishDate(data.publishDate);
        })
        .catch((err) => {
          setError(err.data);
        });
      setButtonText("변경하기");
    } else {
      setButtonText("추가하기");
    }
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    // const Body = {
    //   title: title,
    //   author: author,
    //   publisher: publisher,
    //   seller: seller,
    //   price: price,
    //   publishDate: publishDate,
    // };
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('publisher', publisher);
    formData.append('seller', seller);
    formData.append('price', price);
    formData.append('publishDate', publishDate);
    formData.append('image', file, file.name)
    let dbElement = {};
    if (id) {
      dbElement = {
        method: "PUT",
        url: `http://localhost:3028/books/${id}`,
        body: formData,
      };
    } else {
      dbElement = {
        method: "POST",
        url: "http://localhost:3028/books",
        body: formData,
      };
    }
    callDb(dbElement)
      .then((res) => {
        if (res.status === 201) {
          const id = res.data._id;
          props.movePage(`/books/${id}`);
        } 
      })
      .catch((err) => {
        setError(err.toString());
      });
  };
  return (
    <>
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
        <label>출판일</label>
        <input
          type="text"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          placeholder="출판일"
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
        <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            id="photo"
            file="photo"
            accept=".gif, .jpg, .jpeg, .png"
          />
        {/* <input type="submit" value={Button} /> */}
        <Button type={'submit'} value={buttonText} />
      </form>
      {error && <Error message={error} />}
    </>
  );
}

export default Form;
