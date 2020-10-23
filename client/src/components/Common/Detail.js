import React from 'react'

function Detail(props) {
    const data = props.data;
    return (
        <>
        {data && Object.keys(data).map(item =>{
            if(item === "_id") return null
            return <p key={item.toString()}>{item}: {data[item]}</p>
        })}
        </>
    )
}

export default Detail
