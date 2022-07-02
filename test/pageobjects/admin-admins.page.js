class adminAdmins {
  //Getters
  get title() {
    return $('#root > div > div > section > div > h2');
  }
  get addAdminBtn() {
    return $('#root > div > div > section > div > button');
  }
  get editAdminBtn() {
    return $(
      '#root > div > div > section > div > div > table > tbody > tr:nth-child(8) > td:nth-child(7) > button'
    );
  }
  get deleteAdminBtn() {
    return $(
      '#root > div > div > section > div > div > table > tbody > tr:nth-child(8) > td:nth-child(8) > button'
    );
  }
  get table() {
    return $('#root > div > div > section > div > div > table');
  }
}
module.exports = new adminAdmins();
