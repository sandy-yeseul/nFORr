const httpRequestFormat = require("./httpRequestForm");
const httpResponseFormat = require("./httpResponseFormat");
// import controllers from './controllers';
function MakeExpressCallBack(controller) {
  return async (req, res) => {
    const httpRequest = await httpRequestFormat(req);

    // console.log(data);
    try {
      const data = await controller(httpRequest);
      // console.log(`data: ${data.body}`)
      if (Object.keys(data).length > 0) {
        const response = await httpResponseFormat(data);
        // console.log(`${response.body}\nthis is the response`)
        res.set(response.headers);
        res.type("json");
        res.status(response.statusCode).send(response.body);
        return res;
      }
    } catch (err) {
      console.log("hmm ");
      res.send(err);
      return res;
    }
    // const data = {
    //     code: 200,
    //     body: 'hi now look this is itzy'
    // }
    // try{
    //     controller(httpRequest)
    //     .then((data) => httpResponseFormat(data))
    //     .then((httpResponse) =>{
    //         res.set(httpResponse.headers)
    //         res.status(httpResponse.statusCode).send(httpResponse.body);
    //     })
    // } catch (err){
    //     console.log(err)
    // }
    // const httpResponse = await httpResponseFormat(data); //TODO
    // res.set(httpResponse.headers);
    // res.type('json')
    // res.status(httpResponse.statusCode).send(httpResponse.body);
  };
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
 *
 * 20th, Oct.
 * try Controller(blah).then <- use promise or async
 */

module.exports = MakeExpressCallBack;
