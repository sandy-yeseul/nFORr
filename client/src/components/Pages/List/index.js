import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List(){
    const [item, setItems] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3028/book')
            .then((res) => res.data.data)
            .then((json) => setItems(json[0].title))
            .then(console.log(1));
    }, [item])
    return(
        <div>
            {item && <div>{item}</div>}
        </div>
    )
}

export default List;

