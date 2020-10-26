import React from 'react';
import Button from '@material-ui/core/Button';

function makeButton(props){
   const handler = props.handler;
   const value = props.value;
   const type = props.type;
   const color = props.color;
   return(
       <Button onClick={handler} variant="outlined" color={color}>{value}</Button>
   )
}
export {makeButton};