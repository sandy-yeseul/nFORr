const puppeteer = require("puppeteer");

async function scraper(title) {
  const url = "https://ridibooks.com/";
  try {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(url);
    const [searchEl] = await page.$x(
      '//*[@id="__next"]/div/header/nav/div/form/div/div/label/input'
    );
    await searchEl.type(title);
    await searchEl.press("Enter");
    await page.waitForXPath('//*[@id="__next"]/main/section/div[1]/h2');
    // const [el2] = await page.$x('//*[@id="__next"]/main/section/ul/li/div/div/h3/a');
    const wakeup = await page.$eval(
      "#__next > main > section > ul.css-so1hjs-SearchBookList.e1d8ahie4 > li:nth-child(1) > div > div > h3 > a",
      (el) => {
        return el.textContent;
      }
    );

    await browser.close();
    console.log(wakeup);
    return wakeup.toString();
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
