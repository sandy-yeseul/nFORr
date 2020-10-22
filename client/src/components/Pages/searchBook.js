import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {getListandSet} from '../../utilities';
import {List} from '../Common';

function SearchPage(){
    const [Author, setAuthor] = useState('');
    const [Data, setData] = useState([]);
    const SubmitHandler = (e) =>{
        e.preventDefault();
        const method = "GET",
            url = `http://localhost:3028/books?author=${Author}`;
        getListandSet(method, url, setData)
    }
    return (
        <>
            <form onSubmit={SubmitHandler}>
                <input value={Author} onChange={(e) => setAuthor(e.target.value)} placeholder="검색"/>
                <input type="submit" value ="검색하기" />
            </form>
            { Data.length &&
                <List obj={Data} />
            }
        </>
    )
}
export default withRouter(SearchPage);