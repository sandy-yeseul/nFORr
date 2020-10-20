import React, {useState} from "react";
import {withRouter} from 'react-router-dom';
import {newForm} from '../../../axioses';
import {Form} from '../../Common';

function CreateBookPage() {
  return (
    <>
        <Form axios={"new"} />
    </>
  );
}
export default withRouter(CreateBookPage);

