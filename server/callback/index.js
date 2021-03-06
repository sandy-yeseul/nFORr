const httpRequestFormat = require("./httpRequestForm");
const httpResponseFormat = require("./httpResponseFormat");
function MakeExpressCallBack(controller) {
  return async (req, res) => {
    const httpRequest = await httpRequestFormat(req);
    try {
      const data = await controller(httpRequest);
      if (Object.keys(data).length > 0) {
        const response = await httpResponseFormat(data);
        res.set(response.headers);
        res.type("json");
        res.status(response.statusCode).send(response.body);
        return res;
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({
        err: err.message
      });
      return res;
    }
  };
}

module.exports = MakeExpressCallBack;
