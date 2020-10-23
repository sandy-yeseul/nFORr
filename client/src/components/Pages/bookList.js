import React, {useState, useEffect} from 'react';
import {getListandSet} from '../../utilities';
import {withRouter} from 'react-router-dom';
import {List, Button, Error} from '../Common';

function ListPage(){
    const [Items, setItems] = useState([]);
    //REVIEW 나중에 에러 받고 새로 렌더하면 사라지는지? 아 뭐라는걸까
    const [error, setError] = useState(null);
    useEffect(() => {
        const dbElement={
            method: "GET",
            url: "http://localhost:3028/books"
        }
        getListandSet(dbElement)
            .then(res => setItems(res))
            .catch(err => setError(err.toString()));
    }, []);
    return(
        <div>
            {Items.length > 0 ?
                <List obj={Items} />
            : <p>loading..</p>}
            {error && <Error message={error} />}
            {/* <Button /> */}
        </div>
    )
}
export default withRouter(ListPage);
