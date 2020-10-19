import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function UpdateBookPage() {
    const id = useParams().bookId;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [seller, setSeller] = useState('');
    const [price, setPrice] = useState('');
    const [publishDate, setPublishDate] = useState('');

    useEffect(() => {
        try{
            axios.get(`http://localhost:3028/books/${id}`)
                .then((res) => res.data.data)
                .then((data) =>{
                    setTitle(data.title);
                    setAuthor(data.author);
                    setPublisher(data.publisher);
                    setSeller(data.seller);
                    setPrice(data.price);
                    setPublishDate(data.publishDate);
                });
        } catch(err){
            console.log(err);
        }
    }, []);

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
            method: "PUT",
            url: `http://localhost:3028/books/${id}`,
            data: body
        }).then((res) => console.log(res.data))
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
        <input type="submit" value="변경하기" />
    </form>
  );
}
