import React from 'react';
import {callDb} from '../../utilities';

function Delete(props) {
    const id = props.id;
    const deleteHandler= () =>{
        const method = "DELETE",
            url = `http://localhost:3028/books/${id}`;
        callDb(method, url)
            .then((res) => {
                if(res.status === 201){
                    props.movePage('/books')
                }
            })
    }
    return (
        <>
            <button onClick={deleteHandler}>삭제하기</button>
        </>
    )
}

export default Delete;
