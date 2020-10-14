import React, { useState } from "react";

function Form() {
    const [Title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(Title);
        setTitle('');
        setAuthor('');
    }

  return (
    <form onSubmit={submitHandler}>
        <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} required placeholder="Title" />
        <input type="text" value={Author} onChange={(e) => setAuthor(e.target.value)} required placeholder="Author" />
        <input type="submit" value="서브밋" />
    </form>
  );
}
export default Form;

