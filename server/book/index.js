const { v4: uuidv4 } = require("uuid");

function BuildMakeBook(generateId) {
  return function makeBook({
    _id = "",
    title,
    author,
    publisher = "",
    publishDate = "",
    seller = "",
    price = "",
    image = "",
    isPublished = 0,
  } = {}) {
    if (!title) {
      throw new Error("Book must have Title");
    }
    if (!author) {
      throw new Error("Book must have Author");
    }
    if (price && !isNumber(price)) {
      throw new Error("Price must be a valid number");
    }
    if (isNumber(price) && price < 0) {
      throw new Error("Price must be more than 0");
    }
    if (publishDate && !isDate(publishDate)) {
      throw new Error("Publish date must be valid form");
    }
    if (isDate(publishDate)) {
      publishDate = formatDate(new Date(parseFloat(publishDate)));
    }
    if (!_id) {
      _id = generateId();
    }
    if (publisher) {
      isPublished = 1;
    }
    const book = Object.freeze({
      _id: _id,
      title: title,
      author: author,
      publisher: publisher,
      publishDate: publishDate,
      seller: seller,
      price: price,
      image: image,
      isPublished: isPublished,
    });
    return book;
  };
  function isNumber(str) {
    const number = Number(str);
    return !isNaN(number);
  }
  function isDate(str) {
    const date = new Date(parseFloat(str));
    return !isNaN(date);
  }
  function formatDate(date) {
    var currentTime = new Date();
    var offset = currentTime.getTimezoneOffset();
    var getDate = new Date(date.getTime() - offset * 60 * 1000);
    const converted = getDate.toISOString().split("T")[0];
    return converted;
  }
}
function generateId() {
  var uuid = uuidv4();
  var id = uuid.replace(/-/g, "");
  return id;
}
module.exports = BuildMakeBook(generateId);
