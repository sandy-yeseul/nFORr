import React, {useState} from "react";
import {newForm} from '../../../axioses';
import {Form} from '../../Common';

function CreateBookPage() {
  return (
    <>
        <Form axios={"new"} />
    </>
  );
}
export default CreateBookPage;

