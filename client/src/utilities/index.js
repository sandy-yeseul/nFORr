import axios from 'axios';

export {callAxios};

//TODO change name to call getDatabase or something callDb
async function callAxios(method, url, body=null){
    const result = await axios({
        method: method,
        url: url,
        data: body
    });
    return result;
}