var {Builder, By, until} = require('selenium-webdriver');

describe('Title', function() {
  var driver;

  beforeEach(function() {
    driver = new Builder().forBrowser('chrome').build();
  });

  afterEach(function(done) {
    driver.quit().then(done);
  });

  it('should change according to input value', function(done) {
    driver.get('http://localhost:8000/sync.html')
    driver.findElement(By.name('input')).sendKeys('webdriver');
    driver.findElement(By.name('btn')).click();
    driver.getTitle()
    .then((title) => {
      expect(title).toBe('webdriver - testing...');
      done();
    });
  }, 20000);
});
