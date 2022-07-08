class signUpPage {
  //Getters
  get form() {
    return $('#root > div > div > form');
  }
  get firstNameInput() {
    return $('#root > div > div > form > div > div:nth-child(1) > input');
  }
  get errorName() {
    return $('#root > div > div > form > div > div:nth-child(1) > p');
  }
  get lastNameInput() {
    return $('#root > div > div > form > div > div:nth-child(2) > input');
  }
  get errorLastName() {
    return $('#root > div > div > form > div > div:nth-child(2) > p');
  }
  get phoneInput() {
    return $('#root > div > div > form > div > div:nth-child(3) > input');
  }
  get errorPhone() {
    return $('#root > div > div > form > div > div:nth-child(3) > p');
  }
  get emailInput() {
    return $('#root > div > div > form > div > div:nth-child(4) > input');
  }
  get errorEmail() {
    return $('#root > div > div > form > div > div:nth-child(4) > p');
  }
  get passwordInput() {
    return $('#root > div > div > form > div > div:nth-child(5) > input');
  }
  get errorPassword() {
    return $('#root > div > div > form > div > div:nth-child(5) > p');
  }
  get repeatPwInput() {
    return $('#root > div > div > form > div > div:nth-child(6) > input');
  }
  get errorRepeatPw() {
    return $('#root > div > div > form > div > div:nth-child(6) > p');
  }
  get createBtn() {
    return $('#root > div > div > form > button');
  }

  //Setters
  async setFirstName(name) {
    await this.firstNameInput.setValue(name);
  }
  async setLastName(lastName) {
    await this.lastNameInput.setValue(lastName);
  }
  async setPhone(phone) {
    await this.phoneInput.setValue(phone);
  }
  async setEmail(email) {
    await this.emailInput.setValue(email);
  }
  async setPassword(password) {
    await this.passwordInput.setValue(password);
  }
  async setRepeatPw(repeatPw) {
    await this.repeatPwInput.setValue(repeatPw);
  }

  //Methods
  async signUp(name, lastName, phone, email, password, repeatPw) {
    await this.firstNameInput.setValue(name);
    await this.lastNameInput.setValue(lastName);
    await this.phoneInput.setValue(phone);
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.repeatPwInput.setValue(repeatPw);
    await this.createBtn.click();
  }
}

module.exports = new signUpPage();
