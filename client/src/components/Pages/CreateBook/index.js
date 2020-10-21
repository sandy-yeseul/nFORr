import React from "react";
import {withRouter} from 'react-router-dom';
import {Form} from '../../Common';

function CreateBookPage(props) {
  //REVIEW can i make it separate?
  const movePage = (url) =>{
    alert("SUCCESS!");
    props.history.push(url);
  }
  return (
    <>
        <Form status={"new"} movePage={movePage}/>
    </>
  );
}
export default withRouter(CreateBookPage);

