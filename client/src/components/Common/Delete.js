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
            //REVIEW is it enough to handle error message?
            .catch((err)=>{
                alert(err);
                props.movePage('/')
            })
    }
    return (
        <>
            <button onClick={deleteHandler}>삭제하기</button>
        </>
    )
}

export default Delete;
