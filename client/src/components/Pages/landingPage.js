import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

function LandingPage(){
    useEffect(() => {
        document.body.style.backgroundImage="url('./images/sky.jpg')";
        document.body.style.backgroundSize='100vw 100vh';
        document.body.style.backgroundRepeat='no-repeat';
        document.body.style.margin='auto';
        document.getElementById('Header').style.display= 'none';
        document.getElementById('Footer').style.display='none';
    }, [])
    return (
        <a href='/home'>
            <div className='Landing'>
                {/* LET'S DIVE INTO OUR MEMENTO MORY
                <br />우리의 추억은 그 자체로 값지다. */}
                I WANT TO MAKE IT BLUE
            </div>
        </a>
    )
}
export default withRouter(LandingPage);