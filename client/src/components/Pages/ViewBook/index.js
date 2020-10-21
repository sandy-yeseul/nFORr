import React, {useState, useEffect} from 'react';
import {callAxios} from '../../../utilities';
import {useParams} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Delete} from '../../Common';

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
            callAxios(method, url)
                .then(res => setData(res.data))
        } catch(err){
            console.log('nothing!')
        }
    }, [id]);
    return(
        <div>
        {/* TODO make it separate */}
        {data && Object.keys(data).map(item =>{
            return <p key={item.toString()}>{item}: {data[item]}</p>
        })}
        <a href={`/books/update/${id}`}>Update</a>
        <Delete id={id} movePage={movePage}/>
        </div>
    );
}
export default withRouter(ViewBookPage);