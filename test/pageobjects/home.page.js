class homePage {
  // Getters
  get homeTitle() {
    return $('#root > div > section > h2');
  }
  get adminBtn() {
    return $('#root > div > section > div > div > button:nth-child(1)');
  }
  get employeeBtn() {
    return $('#root > div > section > div > div > button:nth-child(2)');
  }
  get adminLink() {
    return $('#root > div > section > div > div > button:nth-child(1) > a');
  }
  get employeeLink() {
    return $('#root > div > section > div > div > button:nth-child(2) > a');
  }

  // Methods
  async openAdminHome() {
    await this.adminLink.click();
  }
  async openEmployeeHome() {
    await this.employeeLink.click();
  }
  async openBrowser(path) {
    return browser.url(`http://alexis-trackgenix-app.vercel.app/${path}`);
  }
}
module.exports = new homePage();
