class homePage {
  //Getters
  get topBtn() {
    return $('#root > div > div > section > div > svg');
  }
  get firstTitle() {
    return $('#root > div > div > section > section.landing_info__UgBjO > div > h2');
  }
  //Methods
  openBrowser() {
    return browser.url('https://alexis-trackgenix-app.vercel.app/home');
  }
}

module.exports = new homePage();
