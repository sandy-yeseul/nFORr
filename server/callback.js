const httpRequestFormat = require('./httpRequestForm');
const httpResponseFormat = require('./httpResponseFormat');
// import controllers from './controllers';
function MakeExpressCallBack(controller){
    return (req, res) => {
        const httpRequest = httpRequestFormat(req);
        const data = {
            code: 200,
            body: 'hi now look this is itzy'
        }
        const httpResponse = httpResponseFormat(data); //TODO
        res.set(httpResponse.headers);
        res.type('json')
        res.status(httpResponse.statusCode).send(httpResponse.body);
    }
}
    // ANCHOR
    // TODO
    // REVIEW
    // STUB
    // FIXME module exports do something whatever
    /** NOTE
     * there will be two ways(as far as i know)
     * 1. import controller
     * 2. inject controller
     * 
     * did some...
     *  NOTE don't know it's okay or what i'm doing
     * FIXME: get endpoint has two types. do they need to be same?
     * anyway, i guess injections is better since general controller->can't controll get list and get one(and book id too)
     * maybe i can... hmm...
     */

module.exports = MakeExpressCallBack;