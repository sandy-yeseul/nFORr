import newForm from './newForm';
import updateForm from './updateForm';
import axios from 'axios';

export {newForm, updateForm, callAxios};

export default async function callAxios(method, url, body=null){
    const result = await axios({
        method: method,
        url: url,
        data: body
    });
    return result;
}