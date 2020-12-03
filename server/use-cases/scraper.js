const puppeteer = require("puppeteer");

async function scraper(bookSearched) {
  const url = "http://seoji.nl.go.kr/index.do";
  const searchQuery = "클린 코드 인사이트";
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url);
    const [searchEl] = await page.$x(
      '//*[@id="query"]'
    ); // work
    await searchEl.type(searchQuery); // work
    await searchEl.press("Enter"); // work
    await page.waitForXPath('/html/body/div[1]/div[4]/div/div[2]/div[1]/span[3]'); // 도서정보 목록 개수 기다리는게 제일 나은듯. 다른것(더 큰것) 기다리면 먼저 로딩되고 데이터가 없음
    // const [countEl] = await page.$x('/html/body/div[1]/div[4]/div/div[2]/div[1]/span[3]'); // work
    // const count = await (await countEl.getProperty('textContent')).jsonValue() // work
    const count = await page.$$eval("#docs > div", (els) => {
      return els.map((el) => {
         return el.textContent;
      });
    });
   let bookFound ;
    count.forEach(val => {
      const title = (val.split('. ')[1]).split(' 저자')[0]
      const author = (val.split('저자 ')[1]).split(' 발행처')[0]
      const publisher = (val.split('발행처 ')[1]).split(' ISBN')[0]
      const [publishDate, price] = (val.split('발행(예정)일 ')[1]).split(' 가격 ');
      const foundBook= {
        title: title,
        author: author,
        publisher: publisher,
        publishDate: publishDate,
        price: price
      }
      if (
        rmBlank(title) === rmBlank(bookSearched.title) &&
        rmBlank(author) === rmBlank(bookSearched.author)
      )
        bookFound = foundBook;
    });
    // Object.keys(count).map(async (bookEl, i) =>{
    //   const title = await page.$eval(`#docs > div:nth-child(${i+1}) > div.searchFr > span > a`, el=> await getTextData(el, '. '))
    //   console.log(`inside div div div ${title}`)
    // })

    // const title = await page.$eval('#docs > div:nth-child(1) > div.searchFr > span > a', el=>el.textContent.split('. ')[1])
    // const author = await page.$eval('#docs > div:nth-child(1) > div.searchFr > ul > li:nth-child(1)', el=>el.textContent.split('저자 ')[1])
    
    // const publisher = await page.$eval('#docs > div:nth-child(1) > div.searchFr > ul > li:nth-child(2)', el=> el.textContent.split('발행처 ')[1])
    // const publishDate = await page.$eval('#docs > div:nth-child(1) > div.searchFr > ul > li:nth-child(7)', el=>el.textContent.split('발행(예정)일 ')[1])
    // const price = await page.$eval('#docs > div:nth-child(1) > div.searchFr > ul > li:nth-child(8)', el=>el.textContent.split('가격 ')[1])
    await browser.close();
    return bookFound;
    // if(!page.$('#docs > div:nth-child(1)')){
    //   throw new Error("doesn't exist!")
    // }
    // const book = await page.$eval('#docs > div:nth-child(1)', el=>{return el.textContent})

    // await browser.close();
    // console.log(book);
    // return book.toString();
    // const [el2] = await page.$x(
    //   '//*[@id="__next"]/main/section/ul[2]/li[1]/div/div/ul/li[1]/span/a'
    // );
    // const txt = await el2.getProperty("textContent");
    // const a = await txt.jsonValue();

    // return a;
  } catch (err) {
    console.log(err);
  }
}
module.exports = { scraper };
function rmBlank(text) {
  text = text.toString();
  return text.replace(/\s/g, "");
}