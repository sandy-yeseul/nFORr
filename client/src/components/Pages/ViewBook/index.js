import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Delete} from '../../Common';

function ViewBookPage(props){
    const [data, setData] = useState(null);
    const id = useParams().bookId;
    console.log(id);
    useEffect(() => {
        try{
            axios.get(`http://localhost:3028/books/${id}`)
                .then((res) => {
                    if(res) console.log(res.data.data);
                    setData(res.data.data);
                })
        } catch(err){
            console.log('nothing!')
        }
    }, []);
    return(
        <div>
        {data && Object.keys(data).map(item =>{
            return <p>{item}: {data[item]}</p>
        })}
        <a href={`/books/update/${id}`}>Update</a>
        <Delete id={id}/>
        </div>
    );
}
export default ViewBookPage;