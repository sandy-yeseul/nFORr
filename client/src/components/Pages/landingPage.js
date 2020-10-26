import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

function LandingPage(){
    useEffect(() => {
        document.body.style.backgroundImage="url('./images/sky.jpg')";
        document.body.style.backgroundSize='cover';
        document.body.style.backgroundRepeat='no-repeat';
        document.body.style.backgroundPosition='center';
        document.body.style.margin='auto';
        document.getElementById('Header').style.display= 'none';
        document.getElementById('Footer').style.display='none';
        document.getElementById('root').style.width = '100vw';
        document.getElementById('root').style.backgroundColor='transparent';
    }, [])
    return (
        <a href='/home'>
            <div className='Landing'>
                I WANT TO MAKE IT BLUE
            </div>
        </a>
    )
}
export default withRouter(LandingPage);















                {/* LET'S DIVE INTO OUR MEMENTO MORY
                <br />우리의 추억은 그 자체로 값지다. */}