import axios from 'axios';

export {callDb, getDataAndSet, buildMovePage, getListandSet};

// NOTE method, url, body can be an object
async function callDb(method, url, body=null){
    const result = await axios({
        method: method,
        url: url,
        data: body
    });
    return result;
}
// NOTE why not return the result? hmm....  그럼 calldb랑 똑같긴 한데 그런데 음 괜히 나눈건가?
// 결국 error handling이 끼여서 어떻게 해야 할지 생각해봐야할듯... calldb는 그대로 있는게 좋은데
// get data and set 은 바뀔수 있을ㄷ스...
async function getDataAndSet(method, url, setItem){
    try{
        const result = await callDb(method, url);
        setItem(result.data);
    } catch(err){
        //TODO error handling
        alert(err);
    }
}
export default function buildMovePage(props){
    return (url) =>{
        alert("SUCCESS");
        props.history.push(url);
    }
}
async function getListandSet(method, url, setItem){
    try{
        const result = await callDb(method, url);
        const resData = result.data;
        const itemObj = [];
            for(var i=0; i<resData.length; i++){
                if(resData[i]._id.length>0){
                    itemObj.push({id: resData[i]._id, title: resData[i].title});
                }
            }
            setItem(itemObj);
    } catch(err){
        alert(err);
    }
}