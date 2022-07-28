class header {
  //Getters
  get headerTitle() {
    return $('#root > div > header > div.header_leftSide__Sjdye > h2 > a');
  }
  get headerContainer() {
    return $('#root > div > header');
  }
  get headerBurger() {
    return $('#root > div > header > div.header_leftSide__Sjdye > div');
  }
  get loginBtn() {
    return $('#root > div > header > div.header_rightSide__2qor9 > nav > ul > li:nth-child(1) > a');
  }
  get signUpBtn() {
    return $('#root > div > header > div.header_rightSide__2qor9 > nav > ul > li:nth-child(2) > a');
  }
}
module.exports = new header();
