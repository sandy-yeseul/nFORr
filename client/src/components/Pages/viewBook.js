import React, {useState, useEffect} from 'react';
import {getDataAndSet, buildMovePage} from '../../utilities';
import {useParams} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Delete, Detail} from '../Common';

function ViewBookPage(props){
    const [data, setData] = useState(null);
    const id = useParams().bookId;
    const method = "GET";
    const url = `http://localhost:3028/books/${id}`;
    useEffect(() => {
        getDataAndSet(method, url, setData);
    }, [id]);
    return(
        <div>
        {data && <Detail data={data} />}
        <a href={`/books/update/${id}`}>Update</a>
        <Delete id={id} movePage={buildMovePage(props)}/>
        </div>
    );
}
export default withRouter(ViewBookPage);
