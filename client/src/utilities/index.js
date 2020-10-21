import axios from 'axios';

export {callDb};

async function callDb(method, url, body=null){
    const result = await axios({
        method: method,
        url: url,
        data: body
    });
    return result;
}