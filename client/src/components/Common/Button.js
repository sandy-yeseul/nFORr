import React from 'react';
import Button from '@material-ui/core/Button';

function makeButton(props){
   const handler = props.handler;
   const value = props.value;
   const type = props.type;
   const color = props.color;
   const variant = props.variant;
   return(
       <Button type={type} onClick={handler} color={color} variant={variant}>{value}</Button>
   )
}
export {makeButton};