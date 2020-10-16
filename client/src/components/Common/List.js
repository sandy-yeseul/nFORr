import React from 'react';
import { Link } from 'react-router-dom';

function MakeList(props){
    const obj = props.obj;
    try{
        if(!(obj[0].title) && !(obj[0].id)){
            return(
                <p>There's error
                    <Link to={`/`}></Link>
                </p>
            )
        } 
    } catch(err){
        console.log(err);
    }
    return(
        <>
            {obj && obj.map(item=>{
                return <Link to={`/books/${item.id}`}><li key={item.title}>{item.title}</li></Link>
            })}
        </>
    )
}
export default MakeList;