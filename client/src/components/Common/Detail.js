import React from 'react'

function Detail(props) {
    const data = props.data;
    return (
        <>
        {data && Object.keys(data).map(item =>{
            return <p key={item.toString()}>{item}: {data[item]}</p>
        })}
        </>
    )
}

export default Detail
