import axios from "axios";

export {
  callDb,
};

async function callDb({ method, url, body = null } = {}) {
  try {
    const result = await axios({
      method: method,
      url: url,
      data: body,
    });
    return result;
  } catch (err) {
    throw new Error(err.response.data);
  }
}
function searchBook(searchQuery, list){
  
}