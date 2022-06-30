class header {
  //Getters
  get headerTitle() {
    return $('#root > div > header > div.header_pathname__qN2RB');
  }
  get profilePic() {
    return $('#root > div > header > div.header_user__3tRZH');
  }
  get sidebarHeader() {
    return $('#root > div > aside > div > a');
  }
}
module.exports = new header();
