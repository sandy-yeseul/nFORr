import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {callDb} from '../../../utilities';
import {List} from '../../Common';

function SearchPage(){
    const [Author, setAuthor] = useState('');
    const [Data, setData] = useState([]);
    const SubmitHandler = (e) =>{
        e.preventDefault();
        //FIXME OPTIMIZE!!
        const method = "GET",
            url = `http://localhost:3028/books?author=${Author}`;
        callDb(method, url)
            .then(res => res.data)
            //TODO can be separated to one function with the list
            //TOOD show roading, no search result for each result
            .then((dataObject) => {
                let itemObj = [];
                for(var i=0; i<dataObject.length; i++){
                    if(dataObject[i]._id.length>0){
                        itemObj[i] = {id: dataObject[i]._id, title: dataObject[i].title};
                    }
                }
                return itemObj;
            })
            .then(itemObj => setData(itemObj));
    }
    return (
        <>
            <form onSubmit={SubmitHandler}>
                <input value={Author} onChange={(e) => setAuthor(e.target.value)} placeholder="검색"/>
                <input type="submit" value ="검색하기" />
            </form>
            { Data.length &&
                <List obj={Data} />
            }
        </>
    )
}
export default withRouter(SearchPage);