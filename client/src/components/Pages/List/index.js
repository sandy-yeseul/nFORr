import React, {useState, useEffect} from 'react';
import {callAxios} from '../../../utilities';
import {withRouter} from 'react-router-dom';
import {List} from '../../Common';

function ListPage(){
    const [Items, setItems] = useState([]);
    useEffect(() => {
        try{
            const method = "GET",
                url = "http://localhost:3028/books";
            callAxios(method, url)
                .then((res) => res.data)
                .then((data) => {
                    let itemObj = [];
                    for(var i=0; i<Object.keys(data).length; i++){
                        if(data[i]._id.length>0){ //FIXME validation need to be separated
                            itemObj[i] = {id: data[i]._id, title: data[i].title};
                        }
                    }
                    return itemObj;
                })
                .then((itemObj) => setItems(itemObj));
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
