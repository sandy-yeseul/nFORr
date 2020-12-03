const puppeteer = require("puppeteer");

async function findPublisher(bookSearched) {
  const url = "http://seoji.nl.go.kr/index.do";
  const searchQuery = `${bookSearched.title} ${bookSearched.author}`
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const [searchEl] = await page.$x('//*[@id="query"]'); 
    await searchEl.type(searchQuery); 
    await searchEl.press("Enter"); 
    await page.waitForXPath("/html/body/div[1]/div[4]/div/div[2]/div[1]/span[3]"); // 도서정보 목록 개수 기다리는게 제일 나은듯. 다른것(더 큰것) 기다리면 먼저 로딩되고 데이터가 없음
    const books = await page.$$eval("#docs > div", (els) => {
      return els.map((el) => {
        return el.textContent;
      });
    });
    let bookFound = null;
    books.forEach((val) => {
      const title = val.split(". ")[1].split(" 저자")[0];
      const author = val.split("저자 ")[1].split(" 발행처")[0];
      const publisher = val.split("발행처 ")[1].split(" ISBN")[0];
      const [publishDate, price] = val
        .split("발행(예정)일 ")[1]
        .split(" 가격 ");
      const foundBook = {
        title: title,
        author: author,
        publisher: publisher,
        publishDate: publishDate,
        price: price,
        id: bookSearched._id,
      };
      if (
        rmBlank(title) === rmBlank(bookSearched.title) &&
        rmBlank(author) === rmBlank(bookSearched.author)
      )
        bookFound = foundBook;
    });
    await browser.close();
    return bookFound;
  } catch (err) {
    throw new Error(err.message);
  }
}
async function findSeller(){

}
module.exports = {  findPublisher, findSeller };
function rmBlank(text) {
  text = text.toString();
  return text.replace(/\s/g, "");
}
