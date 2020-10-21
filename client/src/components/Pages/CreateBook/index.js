import React from "react";
import {withRouter} from 'react-router-dom';
import {Form} from '../../Common';

function CreateBookPage(props) {
  const movePage = (url) =>{
    alert("SUCCESS!");
    props.history.push(url);
  }
  return (
    <>
        <Form axios={"new"} movePage={movePage}/>
    </>
  );
}
export default withRouter(CreateBookPage);

