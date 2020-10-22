import React, {useState, useEffect} from 'react';
import {callDb} from '../../../utilities';
import {useParams} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Delete, Detail} from '../../Common';

function ViewBookPage(props){
    const [data, setData] = useState(null);
    const id = useParams().bookId;
    const movePage = (url) =>{
        alert("SUCCESS!");
        props.history.push(url)
      }
    useEffect(() => {
        try{
            const method = "GET",
                url = `http://localhost:3028/books/${id}`;
            callDb(method, url)
            // FIXME will be returned as array(maybe)
                .then(res => setData(res.data))
        } catch(err){
            console.log('nothing!')
        }
    }, [id]);
    return(
        <div>
        {data && <Detail data={data} />}
        <a href={`/books/update/${id}`}>Update</a>
        <Delete id={id} movePage={movePage}/>
        </div>
    );
}
export default withRouter(ViewBookPage);