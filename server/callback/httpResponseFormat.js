function httpResponseFormat(data) {
  // console.log(`this is reponseformat ${data.body}`)
  return Object.freeze({
    headers: {
      "Content-Type": "application/json",
      "Last-Modified": new Date().toUTCString(),
    },
    statusCode: data.code,
    body: data.body,
  });
}
module.exports = httpResponseFormat;
