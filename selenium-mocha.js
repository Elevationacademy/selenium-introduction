var {Builder, By, until} = require('selenium-webdriver');
var expect = require('chai').expect;

describe('Title', function() {
  this.timeout(10000);  // set default timeout the mocha way (normally 2000ms)
  var driver;

  beforeEach(function() {
    driver = new Builder().forBrowser('chrome').build();
  });

  afterEach(function() {
    driver.quit(); 
  });

  it('should change according to input value', function(done) {
    driver.get('http://localhost:8000/sync.html')
    driver.findElement(By.name('input')).sendKeys('webdriver');
    driver.findElement(By.name('btn')).click();
    driver.getTitle()
    .then((title) => {
      expect(title).to.be.equal('webdriver - testing...');
      done();
    });

  });
});
