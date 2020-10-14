import React from 'react';

import MakeList from './makeList';

export default function List(){
    const listItems = ["nightmare", "harely", "curiosity"];
    return (<MakeList listItems={listItems}/>)
}