import React from 'react';

function Button(props){
   const handler = props.handler;
   const value = props.value;
   const type = props.type;
   return(
       <button type={type} onClick={handler}>{value}</button>
   )
}
export default Button;