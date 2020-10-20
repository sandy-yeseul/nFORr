module.exports=function makeBook({
  title,
  author,
  publisher = null,
  publishDate = null,
  seller = null,
  price = null,
} = {}) {
  if (!title) {
    throw new Error("Book must have Title");
  }
  if (!author) {
    throw new Error("Book must have Author");
  }
  if (!price && !isNumber(price)) {
    throw new Error("Price must be a valid number");
  }
  if (isNumber(price) && price < 0) {
    throw new Error("Price must be more than 0");
  }
  if (!publishDate && !isDate(publishDate)) {
    throw new Error("Publish date must be valid form");
  }
  if (publishDate) {
    publishDate = formatDate(publishDate);
  }

  const book = Object.freeze({
    title: title,
    author: author,
    publisher: publisher,
    publishDate: publishDate,
    seller: seller,
    price: price
  });
  return book;
}
function isNumber(str) {
  const number = Number(str);
  if (number == NaN) {
    return false;
  }
  return true;
}
function isDate(str) {
  const checkDate = new Date(str);
  if (checkDate == NaN) {
    return false;
  }
  return true;
}
function formatDate(date) {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split("T")[0];
}