function httpResponseFormat(data){
    return Object.freeze({
        headers: {
            'Content-Type': 'application/json',
            'Last-Modified': new Date().toUTCString()
        },
        statusCode: data.code,
        body: data.body
    });
}
module.exports =httpResponseFormat;