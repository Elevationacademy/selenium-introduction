const webdriver = require('selenium-webdriver')
const { By, until, Builder } = webdriver;

const driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:8000/index.html');
driver.wait(until.elementLocated(By.id('cat_5')), 20 * 1000)
.then(() => driver.findElement(By.id('cat_3')))   // return element
.then(element => element.click())                 // click on element
.then(() => console.log('clicked on element'));   // log to console

// wait until the header shows
driver.wait(until.elementLocated(By.id('success')), 20 * 1000)
.then(() => console.log('Success'))
.then(() => driver.quit());
