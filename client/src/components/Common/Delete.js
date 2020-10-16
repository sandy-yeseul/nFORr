import React from 'react';
import axios from 'axios';

function Delete(props) {
    const id = props.id;
    const deleteHandler= () =>{
        axios.delete(`http://localhost:3028/books/${id}`)
            .then((res) => console.log(res.status))
    }
    return (
        <>
            <button onClick={deleteHandler}>삭제하기</button>
        </>
    )
}

export default Delete;
