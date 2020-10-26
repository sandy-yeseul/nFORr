import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

function LandingPage(props){
    useEffect(() => {
        document.body.style.backgroundImage="url('./images/sky.jpg')";
        document.body.style.backgroundSize='100vw 100vh';
        document.body.style.backgroundRepeat='no-repeat';
        document.body.style.margin='auto';
    }, [])
    const clickHandler = (e) =>{
        e.preventDefault();
        props.history.push('/home')
    }
    return (
        <div className='Landing' onClick={clickHandler}>
            {/* LET'S DIVE INTO OUR MEMENTO MORY
            <br />우리의 추억은 그 자체로 값지다. */}
            I WANT TO MAKE IT BLUE
        </div>
    )
}
export default withRouter(LandingPage);