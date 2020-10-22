import React from "react";
import {withRouter, useParams} from 'react-router-dom';
import {Form} from '../Common';
import {buildMovePage} from '../../utilities';

function BookFormPage(props) {
  const id = useParams().bookId;
  return (
    <>
        <Form id={id} movePage={buildMovePage(props)}/>
    </>
  );
}
export default withRouter(BookFormPage);

