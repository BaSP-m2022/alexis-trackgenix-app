class adminHome {
  //Getters
  get title() {
    return $('#root > div > div > section > h2');
  }
}
module.exports = new adminHome();
