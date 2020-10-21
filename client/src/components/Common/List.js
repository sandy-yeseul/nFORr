import React from 'react';
import { Link } from 'react-router-dom';

function MakeList(props){
    const obj = props.obj;
    try{
        if(!(obj[0].title) && !(obj[0].id)){
            throw new Error('no props yet');
        } 
    } catch(err){
        return(
            <p>There's error
                <Link to={`/`}></Link>
            </p>
        )
    }
    return(
        <>
            {obj && obj.map(item=>{
                //NOTE anyway the outside wrapper should have key. child doesn't need
                return <Link to={`/books/${item.id}`} key={item.title}><li>{item.title}</li></Link>
            })}
        </>
    )
}
export default MakeList;