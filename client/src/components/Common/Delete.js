import React from 'react';
import {callDb} from '../../utilities';

function Delete(props) {
    const id = props.id;
    const deleteHandler= () =>{
        const dbElement ={
            method: "DELETE",
            url: `http://localhost:3028/books/${id}`
        }
        callDb(dbElement)
            .then((res) => {
                props.movePage('/books')
            })
            .catch((err) => {
                alert(err);
                props.movePage('/books');
            })
    }
    return (
        <>
            <button onClick={deleteHandler}>삭제하기</button>
        </>
    )
}

export default Delete;
