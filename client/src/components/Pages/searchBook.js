import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {getListandSet} from '../../utilities';
import {List, Error} from '../Common';

function SearchPage(){
    const [Author, setAuthor] = useState('');
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);
    const SubmitHandler = (e) =>{
        e.preventDefault();
        const dbElement = {
            method: "GET",
            url: `http://localhost:3028/books?author=${Author}`
        }
        getListandSet(dbElement)
            .then(res => setData(res))
            .catch(err => setError(err.toString()));
    }
    return (
        <>
            <form onSubmit={SubmitHandler}>
                <input value={Author} onChange={(e) => setAuthor(e.target.value)} placeholder="검색"/>
                <input type="submit" value ="검색하기" />
            </form>
            { Data.length > 0 ? <List obj={Data}/> : <p>doesn't exist</p>}
            {error && <Error message={error} />}
        </>
    )
}
export default withRouter(SearchPage);