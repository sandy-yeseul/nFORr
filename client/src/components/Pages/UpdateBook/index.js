import React from 'react';
import {Form} from '../../Common';
import {withRouter} from 'react-router-dom';

function UpdateBookPage(props) {
  const movePage = (url) =>{
    alert("SUCCESS!");
    props.history.push(url)
  }
  return (
    <Form axios={'update'} movePage = {movePage}/>
  );
}
export default withRouter(UpdateBookPage)