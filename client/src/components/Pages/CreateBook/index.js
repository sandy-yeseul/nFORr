import React, { useState } from "react";
import axios from 'axios';

function Form() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [seller, setSeller] = useState('');
    const [price, setPrice] = useState('');
    const [publishDate, setPublishDate] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        const body ={
            title: title,
            author: author,
            publisher: publisher,
            seller: seller,
            price: price,
            publishDate: publishDate
        }
        console.log(JSON.stringify(body))
        axios({
            method: "POST",
            url: "http://localhost:3028/book",
            data: body
        }).then((res) => console.log(res))
        //TODO database can't read this file
        // 못읽는게 아니라 아예 아무것도 안감 바디가 텅비어서 감
        // axios 이용하니까 바디는 간다 근데 왜 response 가 안와ㅣ
        /*
        fetch('http://localhost:3028/book', {
            method: "POST",
            body: JSON.stringify(body)
        }).then(
            (res) => {
                if(res.status === 'success'){
                    alert("GReat");
                } else if(res.status === 'fail'){
                    alert("FAIL!");
                }
            }
        );
        */
    }

  return (
    <form onSubmit={submitHandler}>
        <label>제목</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="제목" />
        <label>작가</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required placeholder="작가" />
        <label>출판사</label>
        <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} placeholder="출판사" />
        <label>판매처</label>
        <input type="text" value={seller} onChange={(e) => setSeller(e.target.value)} placeholder="판매처" />
        <label>판매가</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="판매가" />
        <label>출판일</label>
        <input type="text" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} placeholder="출판일" />
        <input type="submit" value="추가하기" />
    </form>
  );
}
export default Form;

