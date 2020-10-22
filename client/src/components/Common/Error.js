import React from 'react'

function Error(props) {
    return (
        <div style={{color: 'red'}}>
            {props.message}
        </div>
    )
}

export default Error
