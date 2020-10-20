import axios from 'axios';
export default (body, id) => {
    axios({
        method: "PUT",
        url: `http://localhost:3028/books/${id}`,
        data: body
    }).then((res) => console.log(res.data))
}
