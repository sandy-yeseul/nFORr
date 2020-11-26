import React from 'react';
import Button from '@material-ui/core/Button';

function makeButton(props){
   return(
       <Button variant='contained' {...props}>{props.text}</Button>
   )
}
export {makeButton};