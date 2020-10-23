import axios from "axios";

export { callDb, buildMovePage, getListandSet };

async function callDb({ method, url, body = null } = {}) {
  try{
    const result = await axios({
      method: method,
      url: url,
      data: body,
    });
    return result;
  } catch(err){
    throw new Error(err.response.data);
  }
}
async function getListandSet(dbElement) {
  const result = await callDb(dbElement);
  const resData = result.data;
  const itemObj = [];
  for (var i = 0; i < resData.length; i++) {
    if (resData[i]._id.length > 0) {
      itemObj.push({ id: resData[i]._id, title: resData[i].title });
    }
  }
  return itemObj;
}
export default function buildMovePage(props) {
    return (url) => {
      alert("SUCCESS");
      props.history.push(url);
    };
  }