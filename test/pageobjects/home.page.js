class homePage {
  // Getters
  get homeTitle() {
    return $('#root > div > div > section > h2');
  }

  // Methods
  async openBrowser() {
    return browser.url('http://alexis-trackgenix-app.vercel.app/');
  }
}
module.exports = new homePage();
