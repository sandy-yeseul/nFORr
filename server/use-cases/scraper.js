const puppeteer = require("puppeteer");

async function scraper(title) {
  const url = "http://seoji.nl.go.kr/index.do";
  const searchQuery = "도레미파솔라시도 귀여니";
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url);
    const [searchEl] = await page.$x(
      '//*[@id="query"]'
    );
    await searchEl.type(searchQuery);
    await searchEl.press("Enter");
    await page.waitForXPath('//*[@id="srchResult_tx"]');
    if(!page.$('#docs > div:nth-child(1)')){
      throw new Error("doesn't exist!")
    }
    const book = await page.$eval('#docs > div:nth-child(1) > div.searchFr > span > a', el=>{return el.textContent})

    await browser.close();
    console.log(book);
    return book.toString();
    const [el2] = await page.$x(
      '//*[@id="__next"]/main/section/ul[2]/li[1]/div/div/ul/li[1]/span/a'
    );
    const txt = await el2.getProperty("textContent");
    const a = await txt.jsonValue();

    return a;
  } catch (err) {
    console.log(err);
  }
}
module.exports = { scraper };
