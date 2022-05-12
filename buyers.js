import  puppeteer from 'puppeteer';

// Doc https://pptr.dev/

export const run = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });
  
    await browser.close();
}
