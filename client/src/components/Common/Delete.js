import React from 'react';
import {callDb} from '../../utilities';
import {Button} from './index';

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
            <Button handler={deleteHandler} value={'삭제하기'} />
        </>
    )
}

export default Delete;
