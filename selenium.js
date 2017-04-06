// https://www.npmjs.com/package/selenium-webdriver

const webdriver = require('selenium-webdriver')
const { By, until, Builder } = webdriver;

const driver = new Builder()
    .forBrowser('chrome')
    .build();

// open url
driver.get('http://localhost:8000/index.html');

// find element - the element is created by JavaScript so we have to wait
driver.wait(until.elementLocated(By.id('cat_5')), 20 * 1000)
.then(_ => driver.findElement(By.id('cat_3'))) // return found element
.then(element => element.click())
.then(_ => console.log('clicked on element'));

driver.wait(until.elementLocated(By.id('success')), 20 * 1000)
.then(_ => console.log('Success'))
.then(_ => driver.quit());



// driver.get('http://www.google.com/ncr');
// driver.findElement(By.name('q')).sendKeys('webdriver');
// driver.findElement(By.name('btnG')).click();
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.quit();
