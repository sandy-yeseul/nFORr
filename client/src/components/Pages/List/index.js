import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {List} from '../../Common';

function ListPage(){
    const [Items, setItems] = useState([]);
    useEffect(() => {
        try{
            axios.get('http://localhost:3028/books')
            .then((res)=> res.data.data)
            .then((data) => {
                console.log(Object.keys(data).length);
                let itemObj =[];
                for(var i=0; i<Object.keys(data).length; i++){
                    if(data[i]._id.length>0){
                        itemObj[i] = {id: data[i]._id, title: data[i].title};
                    }
                }
                return itemObj;
            })
            .then((itemObj) =>{setItems(itemObj)});
        } catch(err){
            console.log(err);
        }
    }, []);
    console.log('last')
    return(
        <div>
            {/* {Items && Items.map(item =>{
                return <li key={item.id}>{item.title}</li>
            })} */}
            <p>shut your mouth</p>
            {/* {Items && Items.map(item =>{
                return <Link to={`/books/${item.id}`}><li key={item.title}>{item.title}</li></Link>
            })} */}
            <List obj={Items} />
        </div>
    )
}
export default ListPage;
