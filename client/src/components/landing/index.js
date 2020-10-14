import React from 'react';
import {withRouter} from 'react-router-dom';


function LandingPage(){
    return (
        <div style={{marginTop: '10vh'}}>
            Welcome! it's homepage!
        </div>
    )
}
export default withRouter(LandingPage);