import axios from 'axios';

export {callAxios};

async function callAxios(method, url, body=null){
    const result = await axios({
        method: method,
        url: url,
        data: body
    });
    return result;
}