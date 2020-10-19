import React, {useState} from 'react';
import axios from 'axios';
import {List} from '../../Common';

function SearchPage(){
    const [Author, setAuthor] = useState('');
    const [Data, setData] = useState([]);
    const SubmitHandler = (e) =>{
        e.preventDefault();
        axios.get(`http://localhost:3028/books?author=${Author}`)
            .then((res) => res.data.data)
            .then((dt) => {
                let itemObj = [];
                for(var i=0; i<Object.keys(dt).length; i++){
                    if(dt[i]._id.length>0){
                        itemObj[i] = {id: dt[i]._id, title: dt[i].title};
                    }
                }
                return itemObj;
            })
            .then((itemObj) => setData(itemObj));
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
export default SearchPage;