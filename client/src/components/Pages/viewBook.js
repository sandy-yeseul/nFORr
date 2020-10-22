import React, {useState, useEffect} from 'react';
import {callDb, buildMovePage} from '../../utilities';
import {useParams} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Delete, Detail, Error} from '../Common';

function ViewBookPage(props){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const id = useParams().bookId;
    const dbElement ={
        method: "GET",
        url: `http://localhost:3028/books/${id}`
    }
    useEffect(() => {
        callDb(dbElement)
            .then(res => setData(res.data))
            .catch(err => setError(err));
    }, [dbElement]);
    return(
        <div>
        {data && <Detail data={data} />}
        <a href={`/books/update/${id}`}>Update</a>
        <Delete id={id} movePage={buildMovePage(props)}/>
        {error && <Error message={error} />}
        </div>
    );
}
export default withRouter(ViewBookPage);
