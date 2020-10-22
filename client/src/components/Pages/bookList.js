import React, {useState, useEffect} from 'react';
import {getListandSet} from '../../utilities';
import {withRouter} from 'react-router-dom';
import {List} from '../Common';

function ListPage(){
    const [Items, setItems] = useState([]);
    useEffect(() => {
        try{
            const method = "GET",
                url = "http://localhost:3028/books";
            getListandSet(method, url, setItems);
        } catch(err){
            console.log(err);
        }
    }, []);
    return(
        <div>
            {Items.length > 0 &&
                <List obj={Items} />
            }
        </div>
    )
}
export default withRouter(ListPage);
