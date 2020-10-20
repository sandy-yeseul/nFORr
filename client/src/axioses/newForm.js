import axios from 'axios';
export default (body) => {
    axios({
        method: "POST",
        url: "http://localhost:3028/books",
        data: body
    }).then((res) => console.log(res.data))
}
