import axios from 'axios';
export default async (body) => {
    const result = await axios({
        method: "POST",
        url: "http://localhost:3028/books",
        data: body
    });
    return result;
}
