import  puppeteer from 'puppeteer';

// Doc https://pptr.dev/

export const run = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });

    // await page.click('button.add-to-cart-btn.addToCart')


    // await page.type('#username', 'foo@example.com');
    // await page.type('#password', 'password');
    // await page.keyboard.press('Enter');
  
    // await page.waitForNavigation();
    // console.log('New Page URL:', page.url());
  
    await browser.close();
}
