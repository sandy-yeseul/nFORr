import React from 'react';
import {Form} from '../../Common';
import {withRouter} from 'react-router-dom';

function UpdateBookPage() {
  return (
    <Form axios={'update'} />
  );
}
export default withRouter(UpdateBookPage)