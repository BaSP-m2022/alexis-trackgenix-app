class loginPage {
  //Getters
  get emailInput() {
    return $('#root > div > div > form > div:nth-child(1) > input');
  }
  get passwordInput() {
    return $('#root > div > div > form > div:nth-child(2) > input');
  }
  get loginBtn() {
    return $('#root > div > div > form > button');
  }
  get errorEmail() {
    return $('#root > div > div > form > div:nth-child(1) > p');
  }
  get errorPassword() {
    return $('#root > div > div > form > div:nth-child(2) > p');
  }
  get errorModal() {
    return $('#root > div > div > form > div.errorsuccessmodal_container__JBOhN > div');
  }
  get loginContainer() {
    return $('#root > div > div > form');
  }

  //Setters
  async setEmail(email) {
    await this.emailInput.setValue(email);
  }
  async setPassword(password) {
    await this.passwordInput.setValue(password);
  }

  //Methods
  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginBtn.click();
  }
}
module.exports = new loginPage();
