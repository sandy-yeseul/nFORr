import axios from 'axios';
export default async (body, id) => {
    const result = await axios({
        method: "PUT",
        url: `http://localhost:3028/books/${id}`,
        data: body
    })
    return result
}
