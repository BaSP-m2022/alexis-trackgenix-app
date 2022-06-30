class employeeHome {
  //Getters
  get headerTitle() {
    return $('#root > div > header > div.header_pathname__qN2RB');
  }
  get title() {
    return $('#root > div > div > section > h2');
  }
  get homeBtn() {
    return $('#root > div > div > section > div > button:nth-child(1)');
  }
  get homeBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(1) > a');
  }
  get timesheetBtn() {
    return $('#root > div > div > section > div > button:nth-child(2)');
  }
  get timesheetBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(2) > a');
  }
  get projectsBtn() {
    return $('#root > div > div > section > div > button:nth-child(3)');
  }
  get projectsBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(3) > a');
  }
  get profileBtn() {
    return $('#root > div > div > section > div > button:nth-child(4)');
  }
  get profileBtnLink() {
    return $('#root > div > div > section > div > button:nth-child(4) > a');
  }
}
module.exports = new employeeHome();
