class employeeHome {
  //Getters
  get title() {
    return $('#root > div > div > section > h2');
  }
  get profileImg() {
    return $('#root > div > header > div.header_title__3qE-h > a > div > img');
  }
}
module.exports = new employeeHome();
