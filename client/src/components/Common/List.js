import React from 'react';

function MakeList(props){
    const listItems = props.listItems;
    const listItem = listItems.map((item) =>
        <li key={item.toString()}>{item}</li>
    );
    return(
        <ul>{listItem}</ul>
    );
}
export default MakeList;