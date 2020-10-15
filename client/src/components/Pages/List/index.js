import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListPage(){
    const [item, setItems] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3028/books')
            .then((res) => res.data.data)
            .then((obj) =>{
                //REVIEW this sucks
                //TODO check why json not working
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
               return<a href=""><li key={index}>{i}</li></a> 
           })}
       </div>
    )
}

export default ListPage;