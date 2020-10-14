import React, { useState } from 'react';

function Form() {
    const [Title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');
    
    const onTitleHandler = (event) => {setTitle(event.currentTarget.value)}
    const onAuthorHandler = (event) => {setAuthor(event.currentTarget.value)}
    const onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log('Title: ', Title, '\nAuthor: ', Author);
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <label>Title</label>
            <input type='text' value={Title} onChange={onTitleHandler} />
            
            <label>Author</label>
            <input type='text' value={Author} onChange={onAuthorHandler} />
            <button type='submit'>Submit</button>
        </form>
    );
    
}
export default Form;