import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List(){
    const [item, setItems] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3028/book')
            .then((res) => res.data.data)
            .then((obj) =>{
                let o = []
                for(var i=0; i<Object.keys(obj).length; i++){
                    o[i] = obj[i].title;
                }
                return o;
            })
            .then((arr) => setItems(arr));

        return console.log("wow");
    }, [])
    return(
       <div>
           {item && item.map((i, index) =>{
               return <li key={index}>{i}</li>
           })}
       </div>
    )
}

export default List;