const webdriver = require('selenium-webdriver')
const { By, until, Builder } = webdriver;

const driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:8000/sync.html');
driver.findElement(By.name('input')).sendKeys('webdriver');
driver.findElement(By.name('btn')).click();
driver.wait(until.titleIs('webdriver - testing...'), 1000);
driver.quit();
